import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { footerLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Icons } from "../shared/icons";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container flex max-w-6xl justify-between py-14">
        <div className="flex max-w-md flex-col items-start">
          <Icons.logo className="mb-4 size-10" />
          <p className="mb-2 text-sm text-muted-foreground">
            ScreenVivid is a free, cross-platform software that allows you to record your screen and edit your recording videos with ease.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ScreenVivid. All rights reserved.
          </p>
        </div>
        <div className="flex gap-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <span className="text-sm font-medium text-foreground">
                {section.title}
              </span>
              <ul className="mt-4 list-inside space-y-3">
                {section.items?.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
          <div className="ml-auto flex items-center gap-3">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.gitHub className="size-5" />
            </Link>

            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.twitter className="size-5" />
            </Link>

            <Link
              href={siteConfig.links.discord}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <Icons.discord className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
