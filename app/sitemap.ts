import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://erez-bekolli.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    ...projects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}
