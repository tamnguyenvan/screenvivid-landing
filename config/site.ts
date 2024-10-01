import { SidebarNavItem, SiteConfig } from "types";
import { env } from "@/env.mjs";

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "ScreenVivid - Free, Multi-Platform Screen Recording Software",
  description:
    "ScreenVivid is a screen recording software that allows you to record your screen and share your screen with your friends.",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    twitter: "https://x.com/tamnvvn",
    github: "https://github.com/tamnguyenvan/screenvivid",
    discord: "https://discord.gg/AZG3jB3D",
  },
  mailSupport: "tamnv.work@gmail.com",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "Home", href: "#" },
      { title: "Contact", href: "https://x.com/tamnvvn" },
      { title: "Community", href: "https://discord.gg/AZG3jB3D" },
      { title: "About", href: "https://github.com/tamnguyenvan/screenvivid" },
    ],
  },
  {
    title: "Help & Legal",
    items: [
      { title: "License", href: "https://github.com/tamnguyenvan/screenvivid/blob/main/LICENSE" },
      { title: "Support", href: "https://discord.gg/AZG3jB3D" },
    ],
  },
];
