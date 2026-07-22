import { getRequestConfig } from "next-intl/server";
import {DEFAULT_LANGUAGE, LANGUAGES, type Language} from "./constants";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !LANGUAGES.includes(locale as Language)) {
    locale = DEFAULT_LANGUAGE;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
