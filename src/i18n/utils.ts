import { defaultLang, activeLocales, type SupportedLocale, isValidLocale } from './config';
import { ui, type TranslationKey } from './translations';

/**
 * Extract language code from Astro URL path
 * Example:
 * /en/blog -> 'en'
 * /blog -> 'tr' (default)
 * /en -> 'en'
 * / -> 'tr' (default)
 */
export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (lang && isValidLocale(lang)) {
    return lang;
  }
  return defaultLang;
}

/**
 * Strongly typed translation helper
 */
export function useTranslations(lang: SupportedLocale = defaultLang) {
  return function t(key: TranslationKey, fallback?: string): string {
    const localeDict = ui[lang];
    if (localeDict && key in localeDict) {
      return (localeDict as Record<string, string>)[key];
    }
    // Fallback to default language dictionary
    const fallbackDict = ui[defaultLang];
    if (fallbackDict && key in fallbackDict) {
      return (fallbackDict as Record<string, string>)[key];
    }
    return fallback || key;
  };
}

/**
 * Returns clean localized path
 * Example:
 * getLocalizedPath('/blog', 'tr') -> '/blog'
 * getLocalizedPath('/blog', 'en') -> '/en/blog'
 * getLocalizedPath('/', 'en') -> '/en'
 * getLocalizedPath('/', 'tr') -> '/'
 */
export function getLocalizedPath(path: string, lang: SupportedLocale): string {
  // Normalize leading slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Strip any existing locale prefix
  let unlocalized = cleanPath;
  for (const locale of activeLocales) {
    if (unlocalized === `/${locale}`) {
      unlocalized = '/';
      break;
    }
    if (unlocalized.startsWith(`/${locale}/`)) {
      unlocalized = unlocalized.replace(`/${locale}`, '');
      break;
    }
  }

  if (lang === defaultLang) {
    return unlocalized;
  }

  return unlocalized === '/' ? `/${lang}` : `/${lang}${unlocalized}`;
}

/**
 * Calculates current page URL in a different language
 */
export function switchLanguageUrl(currentUrl: URL, targetLang: SupportedLocale): string {
  const path = currentUrl.pathname;
  return getLocalizedPath(path, targetLang);
}
