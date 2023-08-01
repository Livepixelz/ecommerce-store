"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale, i18n } from "@/i18n-config";
import { useParams, usePathname } from "next/navigation";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const lang = useParams().lang as Locale;
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2">
        {lang.toUpperCase()} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {i18n.locales.map((locale) => {
          return (
            <DropdownMenuItem key={locale}>
              <Link href={redirectedPathName(locale)}>
                {locale.toUpperCase()}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
