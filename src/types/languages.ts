export const LANGUAGES = ['en', 'pt', 'es'] as const;

export type Language = typeof LANGUAGES[number];