// Main entry point for i18n translations
import type { Locale, Translations } from './types';

// German translations
import { common as deCommon } from './locales/de/common';
import { home as deHome } from './locales/de/home';
import { hotel as deHotel } from './locales/de/hotel';
import { rooms as deRooms } from './locales/de/rooms';
import { restaurant as deRestaurant } from './locales/de/restaurant';
import { menus as deMenus } from './locales/de/menus';
import { events as deEvents } from './locales/de/events';
import { activities as deActivities } from './locales/de/activities';
import { contact as deContact } from './locales/de/contact';
import { tagesessen as deTagesessen } from './locales/de/tagesessen';
import { aktionskalender as deAktionskalender } from './locales/de/aktionskalender';
import { impressum as deImpressum } from './locales/de/impressum';
import { datenschutz as deDatenschutz } from './locales/de/datenschutz';

// English translations
import { common as enCommon } from './locales/en/common';
import { home as enHome } from './locales/en/home';
import { hotel as enHotel } from './locales/en/hotel';
import { rooms as enRooms } from './locales/en/rooms';
import { restaurant as enRestaurant } from './locales/en/restaurant';
import { menus as enMenus } from './locales/en/menus';
import { events as enEvents } from './locales/en/events';
import { activities as enActivities } from './locales/en/activities';
import { contact as enContact } from './locales/en/contact';
import { tagesessen as enTagesessen } from './locales/en/tagesessen';
import { aktionskalender as enAktionskalender } from './locales/en/aktionskalender';
import { impressum as enImpressum } from './locales/en/impressum';
import { datenschutz as enDatenschutz } from './locales/en/datenschutz';

// Combined translations object
export const translations: Record<Locale, Translations> = {
  de: {
    common: deCommon,
    home: deHome,
    hotel: deHotel,
    rooms: deRooms,
    restaurant: deRestaurant,
    menus: deMenus,
    events: deEvents,
    activities: deActivities,
    contact: deContact,
    tagesessen: deTagesessen,
    aktionskalender: deAktionskalender,
    impressum: deImpressum,
    datenschutz: deDatenschutz,
  },
  en: {
    common: enCommon,
    home: enHome,
    hotel: enHotel,
    rooms: enRooms,
    restaurant: enRestaurant,
    menus: enMenus,
    events: enEvents,
    activities: enActivities,
    contact: enContact,
    tagesessen: enTagesessen,
    aktionskalender: enAktionskalender,
    impressum: enImpressum,
    datenschutz: enDatenschutz,
  },
};

// Get translations for a specific locale
export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

// Get current locale from URL path
export function getCurrentLocale(pathname: string): Locale {
  if (pathname.startsWith('/en/') || pathname === '/en') {
    return 'en';
  }
  return 'de';
}

// Build alternate URL path for language switcher
export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  const currentLocale = getCurrentLocale(currentPath);
  
  if (currentLocale === targetLocale) {
    return currentPath;
  }
  
  if (targetLocale === 'en') {
    // Add /en prefix
    return '/en' + currentPath;
  } else {
    // Remove /en prefix
    return currentPath.replace(/^\/en/, '') || '/';
  }
}
