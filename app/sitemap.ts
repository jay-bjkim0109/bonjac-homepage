import type { MetadataRoute } from "next";
import { siteUrl } from "./site-url";

// Static export: the file is written once at build time
export const dynamic = "force-static";

// /b and /c are noindex while the two directions are compared, so only the root is listed
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/` }];
}
