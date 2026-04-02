import type { TagesessenTranslations } from '../../types';

export const tagesessen: TagesessenTranslations = {
  hero: {
    headline: 'Tagesessen',
    subheadline: 'Frische Tagesgerichte im Vogthof Landgasthof',
    cta: 'Speisekarte herunterladen',
  },
  download: {
    text: 'Möchten Sie die Liste herunterladen, dann klicken Sie bitte auf das Bild.',
  },
  hours: {
    title: 'Öffnungszeiten',
    days: [
      { day: 'Montag-Donnerstag', time: '11:30-14 Uhr' },
      { day: 'Montag-Mittwoch', time: '18:00-22 Uhr' },
      { day: 'Freitag', time: 'Ruhetag' },
      { day: 'Samstag', time: '18:00-22 Uhr' },
      { day: 'Sonntag', time: '11:30-14 Uhr' },
    ],
    note: 'Sonn- und Feiertage Abends geschlossen!',
    subjectToChange: 'Änderungen vorbehalten',
  },
  closed: {
    title: 'Geschlossen',
    text: 'Dienstag 31.03. abends- und Mittwoch 01.04. bis einschließlich 05.04.2026 geschlossen.',
  },
  contact: {
    title: 'Kontakt',
    phone: 'Telefon: 07361-73688',
  },
  links: {
    menu: 'Speisekarte',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
  },
};
