import type { MetadataRoute } from "next";
import { blogPosts } from "./lib/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.adolescentswellness-africa.org";

  const routes = [
    "",
    "/about",
    "/programs",
    "/services",
    "/gallery",
    "/blog",
    "/contact",
  ];

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}