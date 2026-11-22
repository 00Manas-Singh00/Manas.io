import dayjs from "dayjs";
import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { SITE_INFO } from "@/config/site";
import { Home } from "@/features/home/components/home";
import { PROFILE, SOCIALS } from "@/features/home/data";
import { getLatestCommit } from "@/features/home/lib/github";
import { USER } from "@/features/profile/data/user";

// The live GitHub strip refreshes at most hourly.
export const revalidate = 3600;

export default async function Page() {
  const latestCommit = await getLatestCommit();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <Home latestCommit={latestCommit} />
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: dayjs(USER.dateCreated).toISOString(),
    dateModified: dayjs().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: new URL(PROFILE.portrait, SITE_INFO.url).toString(),
      url: SITE_INFO.url,
      jobTitle: USER.jobTitle,
      description: USER.bio,
      worksFor: { "@type": "Organization", name: PROFILE.company },
      sameAs: SOCIALS.map((s) => s.href),
    },
  };
}
