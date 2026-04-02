import type { RoomsTranslations } from '../../types';

export const rooms: RoomsTranslations = {
  hero: {
    headline: 'Unsere Zimmer',
    subheadline: 'Komfortable Unterkünfte in ruhiger Lage. Zimmer renoviert 2014 mit modernem Landhaus-Charme.',
    cta: 'Jetzt buchen',
  },
  accommodation: {
    title: 'Unterkunft',
    subtitle: 'Wählen Sie Ihr perfektes Zimmer',
    rooms: {
      single: {
        name: 'Einzelzimmer',
        description: 'Komfortables Einzelzimmer mit allen Annehmlichkeiten für den Alleinreisenden. Mit gemütlichem Bett, Schreibtisch und modernem Badezimmer.',
      },
      double: {
        name: 'Doppelzimmer',
        description: 'Geräumiges Doppelzimmer, perfekt für Paare. Geschmackvoll eingerichtet mit modernen Möbeln im Landhausstil.',
      },
      double2: {
        name: 'Doppelzimmer (2 Personen)',
        description: 'Komfortables Doppelzimmer für zwei Gäste zu einem hervorragenden Preis. Ideal für Paare oder Freunde, die gemeinsam reisen.',
      },
      family: {
        name: 'Familienzimmer',
        description: 'Größeres Zimmer, perfekt für Familien. Geräumig und komfortabel mit Platz für die ganze Familie.',
      },
    },
  },
  pricing: {
    title: 'Zimmerpreise',
    subtitle: 'Alle Preise inklusive Frühstücksbuffet',
    single: {
      label: 'Einzelzimmer',
      price: '82€',
      note: 'pro Nacht\n(1 Person, inkl. Frühstück)',
    },
    double1: {
      label: 'Doppelzimmer',
      price: '92€',
      note: 'pro Nacht\n(Einzelnutzung, inkl. Frühstück)',
    },
    double2: {
      label: 'Doppelzimmer',
      price: '130€',
      note: 'pro Nacht\n(2 Personen, inkl. Frühstück)',
    },
    family: {
      label: 'Familienzimmer',
      price: 'ab 130€',
      note: 'pro Nacht\n(bis zu 4 Gäste)',
    },
    children: {
      title: 'Kinderpreise',
      note: '(Unterbringung im Elternzimmer, Frühstück inklusive)',
      age0_3: {
        age: '0-3 Jahre',
        price: 'Kostenlos',
        note: 'Keine zusätzlichen Kosten',
      },
      age3_12: {
        age: '3-12 Jahre',
        price: '25€',
        note: 'pro Nacht inkl. Frühstück',
      },
      age12_16: {
        age: '12-16 Jahre',
        price: '35€',
        note: 'pro Nacht inkl. Frühstück',
      },
    },
  },
  amenities: {
    title: 'Zimmerausstattung',
    subtitle: 'Alles, was Sie für einen komfortablen Aufenthalt brauchen',
    items: [
      'Badezimmer mit WC',
      'Dusche',
      'Fön',
      'Kostenloses WLAN',
      'Flachbild-TV',
      'Willkommensgeschenk: Wasser & frisches Obst',
    ],
  },
  checkInOut: {
    title: 'Check-in & Check-out',
    checkIn: {
      title: 'Check-in',
      time: '14:00 - 20:00',
      note: 'Andere Zeiten nach Vereinbarung möglich',
    },
    checkOut: {
      title: 'Check-out',
      time: 'Bis 10:00',
      note: 'Bitte räumen Sie die Zimmer bis zu diesem Zeitpunkt',
    },
  },
  booking: {
    title: 'Zimmer buchen',
    subtitle: 'Wir freuen uns auf Ihren Besuch',
    description: 'Bereit, Komfort und Gastfreundschaft im Vogthof Landgasthof zu erleben? Kontaktieren Sie uns noch heute, um Ihr Zimmer zu reservieren.',
    ctaCall: '📞 Anrufen: 07361-73688',
    ctaBack: 'Zurück zur Startseite',
  },
  cardButton: 'Reservieren',
};
