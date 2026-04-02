import type { RoomsTranslations } from '../../types';

export const rooms: RoomsTranslations = {
  hero: {
    headline: 'Our Rooms',
    subheadline: 'Comfortable accommodation in a peaceful setting. Rooms renovated in 2014 with modern country-style charm.',
    cta: 'Book Now',
  },
  accommodation: {
    title: 'Accommodation',
    subtitle: 'Choose your perfect room',
    rooms: {
      single: {
        name: 'Single Room',
        description: 'Comfortable single room with all amenities for the solo traveler. Features a cozy bed, work desk, and modern bathroom.',
      },
      double: {
        name: 'Double Room',
        description: 'Spacious double room perfect for couples. Tastefully decorated with modern country-style furniture.',
      },
      double2: {
        name: 'Double Room (2 Persons)',
        description: 'Comfortable double room for two guests at an excellent value. Ideal for couples or friends traveling together.',
      },
      family: {
        name: 'Family Room',
        description: 'Larger room perfect for families. Spacious and comfortable with room for the whole family.',
      },
    },
  },
  pricing: {
    title: 'Room Rates',
    subtitle: 'All prices include breakfast buffet',
    single: {
      label: 'Single',
      price: '82€',
      note: 'per night\n(1 person, incl. breakfast)',
    },
    double1: {
      label: 'Double',
      price: '92€',
      note: 'per night\n(single use, incl. breakfast)',
    },
    double2: {
      label: 'Double',
      price: '130€',
      note: 'per night\n(2 persons, incl. breakfast)',
    },
    family: {
      label: 'Family',
      price: 'From 130€',
      note: 'per night\n(up to 4 guests)',
    },
    children: {
      title: 'Children Prices',
      note: '(Accommodated in parent\'s room, breakfast included)',
      age0_3: {
        age: '0-3 years',
        price: 'Free',
        note: 'No additional charge',
      },
      age3_12: {
        age: '3-12 years',
        price: '25€',
        note: 'Per night with breakfast',
      },
      age12_16: {
        age: '12-16 years',
        price: '35€',
        note: 'Per night with breakfast',
      },
    },
  },
  amenities: {
    title: 'Room Amenities',
    subtitle: 'Everything you need for a comfortable stay',
    items: [
      'Bathroom with toilet',
      'Shower',
      'Hairdryer',
      'Free Wi-Fi',
      'Flat-screen TV',
      'Welcome gift: water & fresh fruit',
    ],
  },
  checkInOut: {
    title: 'Check-in & Check-out',
    checkIn: {
      title: 'Check-in',
      time: '14:00 - 20:00',
      note: 'Other times available by arrangement',
    },
    checkOut: {
      title: 'Check-out',
      time: 'Until 10:00',
      note: 'Please vacate rooms by this time',
    },
  },
  booking: {
    title: 'Book Your Stay',
    subtitle: 'We look forward to welcoming you',
    description: 'Ready to experience comfort and hospitality at Vogthof Landgasthof? Contact us today to reserve your room.',
    ctaCall: '📞 Call: 07361-73688',
    ctaBack: 'Back to Home',
  },
};
