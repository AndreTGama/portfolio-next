export const OBJECT_LANGUAGES = [
  { code: 'en', flag: '🇺🇸' },
  { code: 'pt', flag: '🇧🇷' },
] as const;

export const LANGUAGES = OBJECT_LANGUAGES.map((lang) => lang.code);

export type Language = (typeof LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'en';