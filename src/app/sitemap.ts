import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { CASE_STUDIES, PROJECTS } from "@/features/home/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    ...PROJECTS.filter((p) => CASE_STUDIES[p.id]).map(
      (p) => `/projects/${p.id}`,
    ),
  ];

  return routes.map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));
}
