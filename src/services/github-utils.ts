export function extractRepoFromGitHubUrl(input: string) {
  const trimmed = input.trim();

  if (!trimmed) {
    return null;
  }

  let normalized = trimmed;

  if (/^git@github\.com:/i.test(normalized)) {
    normalized = normalized.replace(/^git@github\.com:/i, "https://github.com/");
  }

  if (/^ssh:\/\/git@github\.com\//i.test(normalized)) {
    normalized = normalized.replace(/^ssh:\/\/git@github\.com\//i, "https://github.com/");
  }

  normalized = normalized.replace(/\.git$/i, "");

  const simpleMatch = normalized.match(/^([^/\s]+)\/([^/\s]+)$/i);
  if (simpleMatch) {
    return { owner: simpleMatch[1], repo: simpleMatch[2] };
  }

  const urlMatch = normalized.match(/^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/?#]+)(?:\/|$)/i);
  if (!urlMatch) {
    return null;
  }

  return { owner: urlMatch[1], repo: urlMatch[2] };
}
