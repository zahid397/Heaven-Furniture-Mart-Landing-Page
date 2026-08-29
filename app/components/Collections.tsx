import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import FadeIn, { Stagger, StaggerItem } from '@/components/ui/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import { images, imageAlt } from '@/data/images';
import { whatsappLink, whatsappMessages } from '@/lib/site';

type Collection = {
  name: string;
  description: string;
  src: string;
  alt: string;
  message: string;
  /** Grid placement on md and up - deliberately uneven, like a showroom floor. */
  span: string;
  sizes: string;
};

const collections: Collection[] = [
  {
    name: 'Living',
    description: 'Sofas, coffee tables, TV units and consoles.',
    src: images.collections.living,
    alt: imageAlt.collections.living,
    message: whatsappMessages.living,
    span: 'md:col-span-7',
    sizes: '(max-width: 768px) 92vw, 55vw',
  },
  {
    name: 'Bedroom',
    description: 'Beds, wardrobes, dressing tables and bedside units.',
    src: images.collections.bedroom,
    alt: imageAlt.collections.bedroom,
    message: whatsappMessages.bedroom,
    span: 'md:col-span-5 md:mt-16',
    sizes: '(max-width: 768px) 92vw, 38vw',
  },
  {
    name: 'Dining',
    description: 'Dining tables, chairs and cabinets built to seat your family.',
    src: images.collections.dining,
    alt: imageAlt.collections.dining,
    message: whatsappMessages.dining,
    span: 'md:col-span-8 md:col-start-4',
    sizes: '(max-width: 768px) 92vw, 62vw',
  },
];

export default function Collections() {
  return (
    <section id="collections" className="border-b border-ivory-dark bg-ivory py-20 sm:py-28 lg:py-32">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Collections"
            title="Made for the rooms you actually live in"
            subtitle="A snapshot of what leaves our workshop. Every piece can be resized, refinished, or redrawn for your space."
          />
        </FadeIn>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12 lg:gap-10">
          {collections.map((collection) => (
            <StaggerItem key={collection.name} className={collection.span}>
              <a
                href={whatsappLink(collection.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask about the ${collection.name} collection on WhatsApp`}
                className="group block h-full bg-ivory-light shadow-card transition-shadow duration-300 ease-luxe hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={collection.src}
                    alt={collection.alt}
                    fill
                    sizes={collection.sizes}
                    className="object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-charcoal/0 transition-colors duration-700 ease-luxe group-hover:bg-charcoal/40"
                  />
                </div>

                <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
                  <div>
                    <h3 className="font-serif text-2xl text-coffee-dark sm:text-3xl">
                      {collection.name}
                    </h3>
                    <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-coffee-light">
                      {collection.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-5 w-5 shrink-0 text-brass-dark transition-transform duration-300 ease-luxe group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn>
          <p className="mt-12 font-sans text-sm text-coffee-light">
            Also building office &amp; study — executive tables, bookshelves and workstations.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
