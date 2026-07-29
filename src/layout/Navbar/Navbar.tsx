import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const t = useTranslations("header");
  return (
    <header className="">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-4 md:divide-x md:divide-zinc-300">
        <div className="col-span-1 p-1 text-center md:col-span-2 md:p-8 md:text-left">
          <span className="text-5xl font-bold leading-none sm:text-6xl md:text-7xl lg:text-8xl">
            André Gama
          </span>
        </div>
        <div className="h-full col-span-1 p-1 text-center md:p-8 md:text-left">
          <p className="flex flex-col h-full justify-between">
            {t("jobTitle")}
            <em>{t("experience")}</em>
          </p>
        </div>
        <div className="h-full col-span-1 p-1 text-center md:p-8 md:text-left">
          <p className="flex h-full flex-row items-center justify-center md:items-end md:justify-start">
            {t("based")}
          </p>
        </div>
      </div>
      <hr className="mt-4 md:mt-0" />
      <nav className="pt-5">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-auto">
            <NavLinks />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
