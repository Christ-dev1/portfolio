export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  key_features: string | null;
  github_url: string | null;
  demo_url: string | null;
  image: string | null;
  published_at: string;
}

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) return [];
  return res.json();
}