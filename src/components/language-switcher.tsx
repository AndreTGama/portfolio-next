"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Language, OBJECT_LANGUAGES } from "@/i18n/constants";

export default function LanguageSwitcher() {
  const languages = OBJECT_LANGUAGES;
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function changeLanguage(newLocale: Language) {
    if (newLocale === locale) return;

    router.replace(pathname, {
      locale: newLocale,
    });
  }

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={locale === lang.code ? "font-bold" : ""}
        >
          {lang.flag} {lang.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}