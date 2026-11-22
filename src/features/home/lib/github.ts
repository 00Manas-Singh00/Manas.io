// Server-side only: imported from the home route, never from client components.

export type LatestCommit = {
  repo: string;
  message: string;
  url: string;
  date: string; // ISO
};

const USER = "00Manas-Singh00";
const API = "https://api.github.com";
// Refetched at most once an hour, server side; visitors never call GitHub.
const REVALIDATE = 3600;

async function get<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API}${path}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "manas-io-portfolio",
      },
      next: { revalidate: REVALIDATE },
    });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

/**
 * The latest commit on the most recently pushed public repo, skipping forks and the
 * profile README repo. Returns null if GitHub can't be reached, so the strip hides.
 */
export async function getLatestCommit(): Promise<LatestCommit | null> {
  const repos = await get<
    { full_name: string; name: string; fork: boolean; archived: boolean }[]
  >(`/users/${USER}/repos?sort=pushed&per_page=10`);
  const repo = repos?.find(
    (r) =>
      !r.fork && !r.archived && r.name.toLowerCase() !== USER.toLowerCase(),
  );
  if (!repo) return null;

  const commits = await get<
    {
      html_url: string;
      parents: unknown[];
      commit: { message: string; author: { date: string } | null };
    }[]
  >(`/repos/${repo.full_name}/commits?per_page=10`);
  // Merge commits ("Merge pull request #18 from ...") say nothing about the work,
  // so show the latest real change instead.
  const c = commits?.find((x) => x.parents.length < 2) ?? commits?.[0];
  if (!c) return null;

  const message = c.commit.message.split("\n")[0].trim();

  return {
    repo: repo.name,
    message: message.length > 90 ? `${message.slice(0, 87)}…` : message,
    url: c.html_url,
    date: c.commit.author?.date ?? new Date().toISOString(),
  };
}
