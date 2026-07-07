export async function getFirstCommit(owner: string, repo: string) {
  const response = await fetch(
    `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/commits?per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Repository not found or it may be private.");
  }

  const linkHeader = response.headers.get("Link");
  const commits = await response.json();

  if (!Array.isArray(commits) || commits.length === 0) {
    throw new Error("No commits found for this repository.");
  }

  if (!linkHeader) {
    return commits[commits.length - 1];
  }

  const match = linkHeader.match(/page=(\d+)>; rel="last"/);

  if (!match) {
    return commits[commits.length - 1];
  }

  const lastPage = match[1];
  const lastResponse = await fetch(
    `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/commits?per_page=100&page=${lastPage}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!lastResponse.ok) {
    throw new Error("Unable to fetch the last commit page.");
  }

  const lastPageCommits = await lastResponse.json();

  if (!Array.isArray(lastPageCommits) || lastPageCommits.length === 0) {
    throw new Error("No commits found for this repository.");
  }

  return lastPageCommits[lastPageCommits.length - 1];
}