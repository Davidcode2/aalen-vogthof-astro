import type { MenusTranslations } from '../../types';

export const menus: MenusTranslations = {
  hero: {
    headline: 'Unsere Speisekarte',
    subheadline: 'Frische, saisonale Zutaten mit Leidenschaft zubereitet',
    ctaPrimary: 'Tagesessen ansehen',
    ctaSecondary: 'Tisch reservieren',
  },
  seasonal: {
    title: 'Saisonal & Frisch',
    subtitle: 'Jedes Gericht erzählt eine Geschichte',
    quote: 'Es gibt kein schöneres Gefühl als den Hunger, kurz bevor man zur Speisekarte greift.',
    quoteAuthor: 'Sir Peter Ustinov',
    paragraph1: 'Bei der Auswahl unserer Gerichte legen die Küchenchefs Reiner Ilg und Johannes Hänle großen Wert auf frische und saisonale Zutaten.',
    paragraph2: 'Die Bandbreite unserer Produkte ist sehr abwechslungsreich. Auf unserer Speisekarte haben schwäbische Klassiker ebenso ihren Platz wie außergewöhnliche Kreationen für besondere Geschmackserlebnisse.',
    paragraph3: 'Beim Arrangement der Produkte achten wir auf das kleinste Detail und richten die Speisen liebevoll an – Das Auge isst ja bekanntlich mit.',
  },
  dailySpecials: {
    title: 'Tagesessen',
    description: 'Von Montag bis Donnerstag bieten wir Ihnen zur Mittagszeit von 12:00 bis 14:00 Uhr eine Auswahl an 3 Tagesessen.',
    availability: 'Verfügbar Mo-Do, 12:00 - 14:00',
    includes: ['Ein frischer Salat', 'Ein Hauptgericht', 'Wahlweise eine Suppe oder ein Dessert'],
    cta: 'Fragen Sie unser Personal nach den heutigen Spezialitäten!',
  },
  categories: {
    title: 'Speisekategorien',
    subtitle: 'Eine kulinarische Reise durch Schwaben und darüber hinaus',
    appetizers: {
      name: 'Vorspeisen',
      description: 'Beginnen Sie Ihr Essen mit unseren sorgfältig zubereiteten Startern',
      items: [
        { name: 'Schwäbischer Kartoffelsalat', desc: 'Traditionelles Rezept mit frischen Kräutern' },
        { name: 'Gemischter Salat', desc: 'Saisonales Grün mit hausgemachtem Dressing' },
        { name: 'Bruschetta', desc: 'Tomaten, Basilikum, Knoblauch auf rustikalem Brot' },
      ],
    },
    mains: {
      name: 'Hauptgerichte',
      description: 'Schwäbische Klassiker und internationale Kreationen',
      items: [
        { name: 'Maultaschen', desc: 'Handgemachte schwäbische Teigtaschen' },
        { name: 'Schnitzel', desc: 'Kalb oder Schwein, paniert und gebraten' },
        { name: 'Entenbraten', desc: 'Serviert mit Rotkohl und Knödeln' },
      ],
    },
    desserts: {
      name: 'Desserts',
      description: 'Süße Verführungen zum perfekten Abschluss',
      items: [
        { name: 'Schwarzwälder Kirschtorte', desc: 'Klassische deutsche Schoko-Kirsch-Torte' },
        { name: 'Apfelstrudel', desc: 'Warme Äpfel mit Vanillesauce' },
        { name: 'Panna Cotta', desc: 'Italienische Sahnecreme mit Beerenkompott' },
      ],
    },
    drinks: {
      name: 'Weine & Getränke',
      description: 'Feine Weine und lokale Getränke',
      items: [
        { name: 'Regionale Weine', desc: 'Sorten aus Württemberg und Baden' },
        { name: 'Hausbiere', desc: 'Auswahl lokaler Brauereien' },
        { name: 'Erfrischungsgetränke', desc: 'Verschiedene Erfrischungen verfügbar' },
      ],
    },
  },
  allergen: {
    title: 'Allergeninformationen',
    subtitle: 'Wir berücksichtigen gerne Ihre Ernährungsbedürfnisse',
    text1: 'Sind Sie Allergiker? Sprechen Sie uns bei der Anmeldung Ihres Besuchs an und wir finden sicher ein passendes Gericht für Sie.',
    text2: 'Unser Küchenteam ist erfahren in der Zubereitung von Mahlzeiten für verschiedene Ernährungseinschränkungen. Bitte informieren Sie Ihren Server über Allergien oder Unverträglichkeiten.',
  },
  cta: {
    title: 'Bereit zu speisen?',
    subtitle: 'Reservieren Sie Ihren Tisch und erleben Sie Vogthof-Gastfreundschaft',
    ctaRestaurant: 'Restaurant-Übersicht',
    ctaCall: 'Zum Reservieren anrufen: 07361-73688',
    hours: 'Öffnungszeiten: Mo-Do 11:30-14:00 & 18:00-22:00 | Sa 18:00-22:00 | So 11:30-14:00',
  },
};
