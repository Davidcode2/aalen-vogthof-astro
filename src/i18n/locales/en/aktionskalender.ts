import type { AktionskalenderTranslations } from '../../types';

export const aktionskalender: AktionskalenderTranslations = {
  hero: {
    headline: 'Menu',
    subheadline: 'Seasonal menu and calendar at Vogthof Landgasthof',
    cta: 'Download Menu',
  },
  download: {
    text: 'To download the list, please click on the image.',
  },
  seasonal: {
    title: 'Seasonal Highlights',
    spring: {
      title: 'Spring Dishes',
      description: 'Fresh spring dishes with seasonal vegetables and herbs.',
    },
    summer: {
      title: 'Summer Classics',
      description: 'Classic summer favorites with fresh, light ingredients.',
    },
    autumn: {
      title: 'Autumn Specialties',
      description: 'Autumn specialties with regional mushrooms and game.',
    },
    winter: {
      title: 'Winter Delights',
      description: 'Comforting winter dishes with seasonal ingredients.',
    },
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
    daily: 'Daily Specials',
    imprint: 'Legal Notice',
    privacy: 'Privacy Policy',
  },
};
