import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || USER.website,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Manas.io",
    href: "/",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "00Manas-Singh00/Manas.io";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/00Manas-Singh00";

export const UTM_PARAMS = {
  utm_source: "manas-io",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
