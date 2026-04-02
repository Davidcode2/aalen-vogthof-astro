import type { MenusTranslations } from '../../types';

export const menus: MenusTranslations = {
  hero: {
    headline: 'Our Menu',
    subheadline: 'Fresh, seasonal ingredients prepared with passion',
    ctaPrimary: 'View Daily Specials',
    ctaSecondary: 'Book a Table',
  },
  seasonal: {
    title: 'Seasonal & Fresh',
    subtitle: 'Every dish tells a story',
    quote: 'There is no better feeling than hunger just before you reach for the menu.',
    quoteAuthor: 'Sir Peter Ustinov',
    paragraph1: 'When selecting our dishes, chefs Reiner Ilg and Johannes Hänle attach great importance to fresh and seasonal ingredients.',
    paragraph2: 'The range of our products is very varied. Our menu includes Swabian classics as well as extraordinary creations for special taste experiences.',
    paragraph3: 'When arranging the products, we pay attention to the smallest detail and prepare the food lovingly – as we all know, the eye eats too.',
  },
  dailySpecials: {
    title: 'Daily Specials',
    description: 'From Monday to Thursday we offer you a selection of 3 daily specials at lunchtime from 12:00 to 14:00.',
    availability: 'Available Mon-Thu, 12:00 - 14:00',
    includes: ['A fresh salad', 'A main course', 'Either a soup or a dessert'],
    cta: 'Ask our staff about today\'s specials!',
  },
  categories: {
    title: 'Menu Categories',
    subtitle: 'A culinary journey through Swabia and beyond',
    appetizers: {
      name: 'Appetizers',
      description: 'Start your meal with our carefully crafted starters',
      items: [
        { name: 'Swabian Potato Salad', desc: 'Traditional recipe with fresh herbs' },
        { name: 'Mixed Salad', desc: 'Seasonal greens with house dressing' },
        { name: 'Bruschetta', desc: 'Tomatoes, basil, garlic on rustic bread' },
      ],
    },
    mains: {
      name: 'Main Courses',
      description: 'Swabian classics and international creations',
      items: [
        { name: 'Maultaschen', desc: 'Handmade Swabian pasta pockets' },
        { name: 'Schnitzel', desc: 'Veal or pork, breaded and fried' },
        { name: 'Roast Duck', desc: 'Served with red cabbage and knödel' },
      ],
    },
    desserts: {
      name: 'Desserts',
      description: 'Sweet endings to your perfect meal',
      items: [
        { name: 'Black Forest Cake', desc: 'Classic German chocolate-cherry cake' },
        { name: 'Apple Strudel', desc: 'Warm apples with vanilla sauce' },
        { name: 'Panna Cotta', desc: 'Italian cream with berry compote' },
      ],
    },
    drinks: {
      name: 'Wines & Drinks',
      description: 'Fine wines and local beverages',
      items: [
        { name: 'Regional Wines', desc: 'Württemberg and Baden varieties' },
        { name: 'House Beers', desc: 'Local brewery selections' },
        { name: 'Soft Drinks', desc: 'Various refreshments available' },
      ],
    },
  },
  allergen: {
    title: 'Allergen Information',
    subtitle: 'We are here to accommodate your dietary needs',
    text1: 'Are you an allergy sufferer? Talk to us when registering your visit and we will surely find a suitable dish for you.',
    text2: 'Our kitchen team is experienced in preparing meals for various dietary restrictions. Please inform your server of any allergies or intolerances.',
  },
  cta: {
    title: 'Ready to Dine?',
    subtitle: 'Reserve your table and experience Vogthof hospitality',
    ctaRestaurant: 'Restaurant Overview',
    ctaCall: 'Call to Reserve: 07361-73688',
    hours: 'Opening Hours: Mon-Thu 11:30-14:00 & 18:00-22:00 | Sat 18:00-22:00 | Sun 11:30-14:00',
  },
};
