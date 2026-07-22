import {defineRouting} from 'next-intl/routing';
import { LANGUAGES, } from '../types/languages';


export const routing = defineRouting({
  locales: LANGUAGES,
  defaultLocale: 'en'
});