import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ScreenVivid",
  description:
    "ScreenVivid is a screen recording software that allows you to record your screen and share your screen with your friends.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://x.com/tamnvvn",
    github: "https://github.com/tamnguyenvan/screenvivid",
    discord: "https://discord.gg/mJW2krrz",
  },
  mailSupport: "tamnv.work@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Home", href: "#" },
      { title: "Contact", href: "mailto:tamnv.work@gmail.com" },
    ],
  },
  {
    title: "Help & Legal",
    items: [
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
];
