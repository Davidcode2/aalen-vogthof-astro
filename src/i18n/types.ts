// Type definitions for i18n translations

export type Locale = 'de' | 'en';

// Navigation items
export interface NavItem {
  label: string;
  href: string;
}

// Common translations (navigation, footer, shared UI)
export interface CommonTranslations {
  nav: {
    hotel: string;
    rooms: string;
    restaurant: string;
    menus: string;
    events: string;
    activities: string;
    contact: string;
  };
  footer: {
    address: string;
    phone: string;
    email: string;
    openingHours: string;
    rights: string;
    imprint: string;
    privacy: string;
  };
  actions: {
    bookNow: string;
    callNow: string;
    sendMessage: string;
    learnMore: string;
    viewDetails: string;
    download: string;
    backToHome: string;
  };
  forms: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    required: string;
  };
  misc: {
    openingHours: string;
    contact: string;
    address: string;
    closed: string;
    subjectToChange: string;
  };
}

// Page-specific translations
export interface HomeTranslations {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
  };
  offerings: {
    title: string;
    subtitle: string;
    rooms: {
      title: string;
      description: string;
      linkText: string;
    };
    cuisine: {
      title: string;
      description: string;
      linkText: string;
    };
    events: {
      title: string;
      description: string;
      linkText: string;
    };
  };
  culinary: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  activities: {
    title: string;
    subtitle: string;
    hiking: { title: string; description: string };
    cycling: { title: string; description: string };
    wellness: { title: string; description: string };
    culture: { title: string; description: string };
    cta: string;
  };
  visit: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    cta: string;
  };
}

export interface HotelTranslations {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    cta: string;
  };
  amenities: {
    title: string;
    items: {
      rooms: { title: string; description: string };
      quality: { title: string; description: string };
      location: { title: string; description: string };
      dining: { title: string; description: string };
      wifi: { title: string; description: string };
      parking: { title: string; description: string };
    };
  };
  location: {
    title: string;
    subtitle: string;
    address: { title: string; text: string };
    gettingHere: { title: string; airport: string; train: string; parking: string };
  };
  contact: {
    title: string;
    phone: string;
    openingHours: string;
    cta: string;
  };
}

export interface RoomsTranslations {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  accommodation: {
    title: string;
    subtitle: string;
    rooms: {
      single: { name: string; description: string };
      double: { name: string; description: string };
      double2: { name: string; description: string };
      family: { name: string; description: string };
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    single: { label: string; price: string; note: string };
    double1: { label: string; price: string; note: string };
    double2: { label: string; price: string; note: string };
    family: { label: string; price: string; note: string };
    children: {
      title: string;
      note: string;
      age0_3: { age: string; price: string; note: string };
      age3_12: { age: string; price: string; note: string };
      age12_16: { age: string; price: string; note: string };
    };
  };
  amenities: {
    title: string;
    subtitle: string;
    items: string[];
  };
  checkInOut: {
    title: string;
    checkIn: { title: string; time: string; note: string };
    checkOut: { title: string; time: string; note: string };
  };
  booking: {
    title: string;
    subtitle: string;
    description: string;
    ctaCall: string;
    ctaBack: string;
  };
}

export interface RestaurantTranslations {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  heritage: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  philosophy: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  chefs: {
    title: string;
    subtitle: string;
    chef1: { name: string; title: string; description: string };
    chef2: { name: string; title: string; description: string };
  };
  privateRooms: {
    title: string;
    subtitle: string;
    vogtstube: { name: string; description: string; capacity: string };
    braunenberg: { name: string; description: string; capacity: string };
    beerGarden: { name: string; description: string; capacity: string };
    contactText: string;
    cta: string;
  };
  beerGarden: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  reserve: {
    title: string;
    subtitle: string;
    phone: string;
    hours: string;
    cta: string;
  };
}

export interface MenusTranslations {
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  seasonal: {
    title: string;
    subtitle: string;
    quote: string;
    quoteAuthor: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  dailySpecials: {
    title: string;
    description: string;
    availability: string;
    includes: string[];
    cta: string;
  };
  categories: {
    title: string;
    subtitle: string;
    appetizers: { name: string; description: string; items: { name: string; desc: string }[] };
    mains: { name: string; description: string; items: { name: string; desc: string }[] };
    desserts: { name: string; description: string; items: { name: string; desc: string }[] };
    drinks: { name: string; description: string; items: { name: string; desc: string }[] };
  };
  allergen: {
    title: string;
    subtitle: string;
    text1: string;
    text2: string;
  };
  cta: {
    title: string;
    subtitle: string;
    ctaRestaurant: string;
    ctaCall: string;
    hours: string;
  };
}

export interface EventsTranslations {
  hero: {
    headline: string;
    subheadline: string;
  };
  intro: {
    title: string;
    subtitle: string;
    text: string;
  };
  capacity: {
    title: string;
    subtitle: string;
    restaurant: { title: string; capacity: string; desc: string };
    vogtstube: { title: string; capacity: string; desc: string };
    braunenberg: { title: string; capacity: string; desc: string };
  };
  services: {
    title: string;
    subtitle: string;
    menu: { title: string; description: string };
    decoration: { title: string; description: string };
    consultation: { title: string; description: string };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  planning: {
    title: string;
    subtitle: string;
    text: string;
    ctaCall: string;
    ctaEmail: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export interface ActivitiesTranslations {
  hero: {
    headline: string;
    subheadline: string;
  };
  movement: {
    title: string;
    subtitle: string;
    hiking: { title: string; description: string };
    biking: { title: string; description: string };
    swimming: { title: string; description: string };
    winter: { title: string; description: string };
  };
  wellness: {
    title: string;
    subtitle: string;
    stollen: { title: string; description: string };
    thermen: { title: string; description: string };
  };
  culture: {
    title: string;
    subtitle: string;
    aalen: { title: string; description: string };
    ellwangen: { title: string; description: string };
    neresheim: { title: string; description: string };
    dinkelsbuehl: { title: string; description: string };
    rothenburg: { title: string; description: string };
    cities: { title: string; description: string };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export interface ContactTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  info: {
    title: string;
    phone: string;
    fax: string;
    email: string;
    address: string;
  };
  hours: {
    title: string;
    note: string;
    schedule: { days: string; hours: string }[];
  };
  form: {
    title: string;
  };
  map: {
    title: string;
    address: string;
    ctaRoute: string;
    ctaCall: string;
  };
  events: {
    title: string;
    text: string;
    ctaMenu: string;
    ctaDaily: string;
  };
}

export interface TagesessenTranslations {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  download: {
    text: string;
  };
  hours: {
    title: string;
    days: { day: string; time: string }[];
    note: string;
    subjectToChange: string;
  };
  closed: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    phone: string;
  };
  links: {
    menu: string;
    imprint: string;
    privacy: string;
  };
}

export interface AktionskalenderTranslations {
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  download: {
    text: string;
  };
  seasonal: {
    title: string;
    spring: { title: string; description: string };
    summer: { title: string; description: string };
    autumn: { title: string; description: string };
    winter: { title: string; description: string };
  };
  hours: {
    title: string;
    days: { day: string; time: string }[];
    note: string;
    subjectToChange: string;
  };
  closed: {
    title: string;
    text: string;
  };
  contact: {
    title: string;
    phone: string;
  };
  links: {
    daily: string;
    imprint: string;
    privacy: string;
  };
}

export interface ImpressumTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  info: {
    title: string;
    owner: string;
    address: string;
    phone: string;
    fax: string;
    email: string;
    website: string;
    taxId: string;
  };
  content: {
    title: string;
    text: string;
  };
  links: {
    title: string;
    text: string;
  };
  copyright: {
    title: string;
    text: string;
  };
  privacy: {
    title: string;
    text: string;
  };
}

export interface DatenschutzTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  sections: {
    responsible: { title: string; text: string };
    scope: { title: string; text: string };
    sharing: { title: string; text: string };
    cookies: { title: string; text: string };
    maps: { title: string; text: string };
    rights: { title: string; text: string };
    update: { title: string; text: string };
  };
}

// Combined translations type
export interface Translations {
  common: CommonTranslations;
  home: HomeTranslations;
  hotel: HotelTranslations;
  rooms: RoomsTranslations;
  restaurant: RestaurantTranslations;
  menus: MenusTranslations;
  events: EventsTranslations;
  activities: ActivitiesTranslations;
  contact: ContactTranslations;
  tagesessen: TagesessenTranslations;
  aktionskalender: AktionskalenderTranslations;
  impressum: ImpressumTranslations;
  datenschutz: DatenschutzTranslations;
}
