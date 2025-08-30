import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [""] as const;

  return routes.map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));
}
