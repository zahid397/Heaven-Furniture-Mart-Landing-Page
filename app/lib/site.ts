/**
 * Single source of truth for every piece of business data on the page.
 * Nothing here is invented - all values come from the client brief.
 */

const rawWhatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+8801960481983';
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://heavenfurnituremart.com';

export const site = {
  name: 'Heaven Furniture Mart',
  tagline: 'Designed. Crafted. Customized.',
  founder: 'Abul Kalam Bhuiyan',
  founderRole: 'Managing Director',
  foundingDate: '2020',

  /** Pretty format for display. */
  phoneDisplay: '+880 1960-481983',
  /** E.164 for tel: links and structured data. */
  phoneE164: '+8801960481983',
  email: 'heavenfurnituremart@gmail.com',

  address: {
    street: 'Agrabad Access Road',
    landmark: 'Opposite RAK Ceramics',
    locality: 'Chattogram',
    country: 'BD',
    countryName: 'Bangladesh',
  },

  social: {
    facebook: 'https://facebook.com/HeavenFurnitureMart',
    instagram: 'https://instagram.com/heaven_furniture_ltd',
    youtube: 'https://youtube.com/@HeavenFurnitureMart',
  },

  url: rawSiteUrl.replace(/\/+$/, ''),
} as const;

/**
 * wa.me only accepts digits. The env var is documented with a leading "+",
 * so strip every non-digit before building the link.
 */
const whatsappDigits = rawWhatsapp.replace(/\D/g, '');

export function whatsappLink(message: string): string {
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;
}

/** Every pre-filled message the page can send, kept in one place. */
export const whatsappMessages = {
  consultation: 'Hello Heaven Furniture Mart, I want a free design consultation.',
  quote: 'Hello Heaven Furniture Mart, I would like a quote for a bespoke piece.',
  living: 'Hello Heaven Furniture Mart, I am interested in your living room collection.',
  bedroom: 'Hello Heaven Furniture Mart, I am interested in your bedroom collection.',
  dining: 'Hello Heaven Furniture Mart, I am interested in your dining collection.',
  visit: 'Hello Heaven Furniture Mart, I would like to visit your Agrabad showroom.',
} as const;

export const navLinks = [
  { label: 'Collections', href: '#collections' },
  { label: 'Bespoke', href: '#bespoke' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;
