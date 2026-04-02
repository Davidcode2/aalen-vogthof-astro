import type { ContactTranslations } from '../../types';

export const contact: ContactTranslations = {
  hero: {
    title: 'Contact Us',
    subtitle: 'We look forward to hearing from you. Call us or send us a message!',
  },
  info: {
    title: 'Contact Information',
    phone: 'Phone',
    fax: 'Fax',
    email: 'Email',
    address: 'Address',
  },
  hours: {
    title: 'Opening Hours',
    note: 'Sundays and public holidays evenings closed! Subject to changes.',
    schedule: [
      { days: 'Monday-Thursday', hours: '11:30-14:00' },
      { days: 'Monday-Wednesday', hours: '18:00-21:30' },
      { days: 'Friday', hours: 'Closed' },
      { days: 'Saturday', hours: '18:00-22:00' },
      { days: 'Sunday', hours: '11:30-14:00' },
    ],
  },
  form: {
    title: 'Send us a Message',
  },
  map: {
    title: 'Find Us',
    address: 'Bergbaustraße 28/1, 73433 Aalen-Röthardt',
    ctaRoute: 'Route here',
    ctaCall: 'Call now',
  },
  events: {
    title: 'Events & Celebrations',
    text: 'For large groups and celebrations, we also offer different opening hours. Please contact us!',
    ctaMenu: 'View Menu',
    ctaDaily: 'Daily Specials',
  },
};
