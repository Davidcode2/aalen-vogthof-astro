import type { ContactTranslations } from '../../types';

export const contact: ContactTranslations = {
  hero: {
    title: 'Kontaktieren Sie uns',
    subtitle: 'Wir freuen uns auf Ihre Nachricht. Rufen Sie an oder schreiben Sie uns!',
  },
  info: {
    title: 'Kontaktinformationen',
    phone: 'Telefon',
    fax: 'Fax',
    email: 'E-Mail',
    address: 'Adresse',
  },
  hours: {
    title: 'Öffnungszeiten',
    note: 'Sonn- und Feiertage Abends geschlossen! Änderungen vorbehalten.',
    schedule: [
      { days: 'Montag-Donnerstag', hours: '11:30-14:00 Uhr' },
      { days: 'Montag-Mittwoch', hours: '18:00-21:30 Uhr' },
      { days: 'Freitag', hours: 'Ruhetag' },
      { days: 'Samstag', hours: '18:00-22:00 Uhr' },
      { days: 'Sonntag', hours: '11:30-14:00 Uhr' },
    ],
  },
  form: {
    title: 'Senden Sie uns eine Nachricht',
  },
  map: {
    title: 'Finden Sie uns',
    address: 'Bergbaustraße 28/1, 73433 Aalen-Röthardt',
    ctaRoute: 'Route hierher',
    ctaCall: 'Jetzt anrufen',
  },
  events: {
    title: 'Veranstaltungen & Feiern',
    text: 'Bei großen Gruppen und Feierlichkeiten bieten wir auch abweichende Öffnungszeiten an. Bitte sprechen Sie uns an!',
    ctaMenu: 'Speisekarte ansehen',
    ctaDaily: 'Tagesessen',
  },
};
