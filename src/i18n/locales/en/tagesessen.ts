import type { TagesessenTranslations } from '../../types';

export const tagesessen: TagesessenTranslations = {
  hero: {
    headline: 'Daily Specials',
    subheadline: 'Fresh daily specials at Vogthof Landgasthof',
    cta: 'Download Menu',
  },
  download: {
    text: 'To download the list, please click on the image.',
  },
  hours: {
    title: 'Opening Hours',
    days: [
      { day: 'Monday-Thursday', time: '11:30-14:00' },
      { day: 'Monday-Wednesday', time: '18:00-22:00' },
      { day: 'Friday', time: 'Closed' },
      { day: 'Saturday', time: '18:00-22:00' },
      { day: 'Sunday', time: '11:30-14:00' },
    ],
    note: 'Sunday and public holidays evenings closed!',
    subjectToChange: 'Subject to change',
  },
  closed: {
    title: 'Closed',
    text: 'Tuesday 31.03. evening and Wednesday 01.04. through 05.04.2026 closed.',
  },
  contact: {
    title: 'Contact',
    phone: 'Phone: 07361-73688',
  },
  links: {
    menu: 'Menu',
    imprint: 'Legal Notice',
    privacy: 'Privacy Policy',
  },
};
