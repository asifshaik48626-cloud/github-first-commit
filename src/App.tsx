import { useEffect, useState } from "react";
import { getFirstCommit } from "./services/github";
import { extractRepoFromGitHubUrl } from "./services/github-utils";

function buildShareUrl(repo: string) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set("repo", repo);
  return `${window.location.pathname}?${searchParams.toString()}`;
}

export default function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [commit, setCommit] = useState<any>(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const updateShareUrl = (repo: string) => {
    const newUrl = buildShareUrl(repo);
    window.history.replaceState(null, "", newUrl);
    setShareUrl(window.location.href);
  };

  const fetchCommitForRepo = async (repoUrl: string) => {
    setLoading(true);
    setCommit(null);
    setError("");
    setCopied(false);

    const repoInfo = extractRepoFromGitHubUrl(repoUrl);

    if (!repoInfo) {
      setError("Please enter a valid GitHub repository URL.");
      setLoading(false);
      return;
    }

    const { owner, repo } = repoInfo;

    try {
      const data = await getFirstCommit(owner, repo);
      setCommit(data);
      updateShareUrl(repoUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Repository not found or it may be private.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    await fetchCommitForRepo(url);
  };

  const copySHA = async () => {
    if (!commit) return;

    await navigator.clipboard.writeText(commit.sha);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const repoParam = searchParams.get("repo");

    if (repoParam) {
      const decodedRepo = decodeURIComponent(repoParam);
      setUrl(decodedRepo);
      fetchCommitForRepo(decodedRepo);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
              CommitGenius
            </p>
            <h1 className="mt-3 text-4xl font-semibold sm:text-5xl md:text-6xl">
              GitHub First Commit Finder
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300 sm:text-lg">
              Discover the very first commit of any public GitHub repository in seconds. Trace back the origins of open-source projects with a single link.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_25px_90px_-40px_rgba(14,52,74,0.9)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">
              Engineered for precision
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200/80">React</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200/80">TypeScript</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200/80">Tailwind CSS</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200/80">GitHub API</span>
            </div>
          </div>
        </header>

        <main className="mt-12 space-y-10">
          <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_60px_120px_-55px_rgba(15,23,42,0.75)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/90">
                  Real-time analysis
                </p>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Trace Your Legacy.
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300/90">
                  Enter any public GitHub repo link and unlock the genesis commit with high-precision history tracking.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-4 sm:max-w-xl">
                <label className="text-sm font-medium text-slate-200/90" htmlFor="repo">
                  Repository URL
                </label>
                <div className="flex w-full gap-3 flex-col sm:flex-row">
                  <input
                    id="repo"
                    className="min-w-0 rounded-3xl border border-slate-600 bg-slate-950/80 p-4 text-slate-100 outline-none ring-1 ring-slate-700 transition focus:border-cyan-400 focus:ring-cyan-400/40"
                    placeholder="https://github.com/facebook/react"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <button
                    onClick={handleClick}
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:from-cyan-400 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Searching..." : "Find First Commit"}
                  </button>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-rose-300">{error}</p>
                )}
              </div>
            </div>
          </section>

          {commit && (
            <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_50px_120px_-60px_rgba(15,23,42,0.8)] backdrop-blur-xl">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                    First Commit
                  </span>
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {commit.commit.message.split("\n")[0] || "Initial commit"}
                  </h3>
                  <p className="text-slate-400">
                    {commit.html_url?.replace(/^https?:\/\/github\.com\//, "")}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:w-[40%]">
                  <div className="rounded-3xl border border-slate-700/70 bg-slate-950/70 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Date</p>
                    <p className="mt-3 text-lg font-semibold text-slate-100">
                      {new Date(commit.commit.author.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-700/70 bg-slate-950/70 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Author</p>
                    <p className="mt-3 text-lg font-semibold text-slate-100">
                      {commit.commit.author.name}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-700/70 bg-slate-950/70 p-5 sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">SHA</p>
                    <p className="mt-3 break-all text-lg font-semibold text-slate-100">{commit.sha}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  onClick={copySHA}
                  className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:from-emerald-400 hover:to-emerald-300"
                >
                  {copied ? "Copied!" : "Copy SHA"}
                </button>
                <a
                  href={commit.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Open on GitHub
                </a>
              </div>

              {shareUrl && (
                <div className="mt-6 rounded-3xl border border-slate-700/70 bg-slate-950/80 p-5 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                    Share this result
                  </p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <input
                      type="text"
                      readOnly
                      value={shareUrl}
                      className="min-w-0 rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 outline-none"
                    />
                    <button
                      onClick={async () => {
                        await navigator.clipboard.writeText(shareUrl);
                      }}
                      className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                    >
                      Copy link
                    </button>
                  </div>
                </div>
              )}
            </section>
          )}

          <section className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Binary Search",
                description: "Optimized GitHub history traversal finds the repository root with fewer API calls.",
              },
              {
                title: "Instant Cache",
                description: "Frequently requested repos are cached for faster results and sub-second feedback.",
              },
              {
                title: "Meta Analysis",
                description: "We show commit metadata and author context for each repository origin.",
              },
            ].map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/20"
              >
                <h4 className="text-xl font-semibold text-slate-100">{feature.title}</h4>
                <p className="mt-3 text-slate-400">{feature.description}</p>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
