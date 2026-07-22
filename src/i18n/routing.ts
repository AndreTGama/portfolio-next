import {defineRouting} from 'next-intl/routing';
import { DEFAULT_LANGUAGE, LANGUAGES } from './constants';


export const routing = defineRouting({
  locales: LANGUAGES,
  defaultLocale: DEFAULT_LANGUAGE
});