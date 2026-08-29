/**
 * Centralized image configuration.
 *
 * Every <Image> on the page reads its src from this file. To swap a photo,
 * drop the new file into /public/images with the same name - no component
 * needs to change.
 *
 * Source: Heaven Furniture Mart's own social media exports. Each original had
 * the logo, a "CRAFTED FOR LUXURY LIVING" headline and a location bar burned
 * into it; those bands were cropped out so the page carries its own
 * typography instead of competing with the photo.
 */

export const images = {
  hero: '/images/hero-showroom.jpg',
  collections: {
    living: '/images/collections/living.jpg',
    bedroom: '/images/collections/bedroom.jpg',
    dining: '/images/collections/dining.jpg',
  },
  bespoke: '/images/bespoke-craft.jpg',
  bespokeDetail: '/images/detail-cabinet.jpg',
  showroom: '/images/showroom-interior.jpg',
  ogImage: '/og-image.jpg',
} as const;

/** Alt text lives next to the images so it can never drift out of sync. */
export const imageAlt = {
  hero: 'Champagne-gold carved sofa set with a glass-top centre table in the Heaven Furniture Mart showroom',
  collections: {
    living: 'Solid wood sofa set with ivory upholstery and a fretwork coffee table in a Chattogram living room',
    bedroom: 'Bespoke wooden king-size bed with a tall panelled wardrobe behind it',
    dining: 'Six-seat dining set with a marble top and studded leather chairs',
  },
  bespoke: 'Hand-carved gilded sofa with embroidered floral upholstery, built to order',
  bespokeDetail: 'Glass display cabinet with carved gold detailing and lit shelves',
  showroom: 'Royal blue velvet sofa set with a carved gold centre table in the Agrabad showroom',
} as const;
