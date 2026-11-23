import type { MetadataRoute } from "next";
import { siteUrl } from "./site-url";

// Static export: the file is written once at build time
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // /b and /c are kept out of search by their noindex tag; a Disallow here would stop crawlers from reading it
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
