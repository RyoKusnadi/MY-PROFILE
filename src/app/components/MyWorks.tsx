import { MyWorksClient } from './MyWorks.client';

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage?: string;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  stargazers_count: number;
};

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
};

async function fetchRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch('https://api.github.com/users/RyoKusnadi/repos?sort=updated', {
      next: { revalidate: 60 * 60 }, // cache for 1h
      headers: { Accept: 'application/vnd.github+json' },
    });

    if (!res.ok) {
      return [];
    }

    const data = (await res.json()) as GitHubRepo[];
    const filtered = data.filter((repo) => !repo.fork && !repo.archived);
    filtered.sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });
    return filtered.slice(0, 6);
  } catch {
    return [];
  }
}

async function fetchMediumPosts(): Promise<MediumPost[]> {
  try {
    const res = await fetch(
      'https://api.rss2json.com/v1/api.json?rssx_url=https://medium.com/feed/@ryo.kusnadi',
      { next: { revalidate: 60 * 60 } }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    if (!data.items) return [];

    return data.items.slice(0, 3).map((item: any) => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
    }));
  } catch {
    return [];
  }
}

export const revalidate = 60 * 30; // revalidate page every 30 minutes

export default async function MyWorks() {
  const [repos, mediumPosts] = await Promise.all([fetchRepos(), fetchMediumPosts()]);
  return <MyWorksClient repos={repos} mediumPosts={mediumPosts} />;
}