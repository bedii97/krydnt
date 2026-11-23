export const defaultLang = 'tr' as const;

export interface LanguageMeta {
  code: string;
  label: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  active: boolean; // active today or ready in registry
}

export const languages: Record<string, LanguageMeta> = {
  tr: {
    code: 'tr',
    label: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    dir: 'ltr',
    active: true,
  },
  en: {
    code: 'en',
    label: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    dir: 'ltr',
    active: true,
  },
  // Ready to activate in Phase 2 with zero refactoring
  de: {
    code: 'de',
    label: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    dir: 'ltr',
    active: false,
  },
  ar: {
    code: 'ar',
    label: 'Arabic',
    nativeName: 'العربية',
    flag: '🇦🇪',
    dir: 'rtl',
    active: false,
  },
  ru: {
    code: 'ru',
    label: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    dir: 'ltr',
    active: false,
  },
} as const;

export type SupportedLocale = 'tr' | 'en';
export const activeLocales: SupportedLocale[] = ['tr', 'en'];

export function isValidLocale(locale: string): locale is SupportedLocale {
  return activeLocales.includes(locale as SupportedLocale);
}
