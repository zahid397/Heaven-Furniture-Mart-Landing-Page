import Image from 'next/image';
import FadeIn, { Stagger, StaggerItem } from '@/components/ui/FadeIn';
import { images, imageAlt } from '@/data/images';
import { site } from '@/lib/site';

const milestones = [
  { year: '2020', event: `Founded by ${site.founder}` },
  { year: '2021', event: 'Opened the Agrabad showroom' },
  { year: '2024–25', event: 'Exhibited at the International Furniture Fair, Chattogram' },
  { year: '2025', event: 'Became a member of the Chamber of Commerce' },
  { year: '2026', event: 'Received nationwide BFIOA recognition' },
];

export default function SocialProof() {
  return (
    <section id="about" className="border-b border-ivory-dark bg-ivory py-24 text-coffee sm:py-28 lg:py-32">
      <div className="container-page">
        <h2 className="sr-only">About Heaven Furniture Mart</h2>

        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="rule-brass mx-auto" aria-hidden="true" />

          <figure className="mt-10">
            <blockquote className="font-serif text-2xl italic leading-relaxed text-coffee-dark sm:text-3xl lg:text-4xl">
              “At Heaven Furniture Mart, we believe furniture is more than just function; it is a
              reflection of lifestyle, taste, and comfort.”
            </blockquote>
            <figcaption className="mt-8 font-sans text-sm uppercase tracking-eyebrow text-coffee-light">
              {site.founder} — {site.founderRole}
            </figcaption>
          </figure>
        </FadeIn>

        <FadeIn className="mt-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
            <Image
              src={images.showroom}
              alt={imageAlt.showroom}
              fill
              sizes="(max-width: 1280px) 92vw, 1200px"
              className="object-cover"
            />
          </div>
          <p className="mt-5 text-center font-sans text-sm text-coffee-light">
            Trusted by hundreds of happy homeowners in Chattogram
          </p>
        </FadeIn>

        <Stagger className="mt-20 grid grid-cols-1 gap-px border-t border-ivory-dark sm:grid-cols-3 lg:grid-cols-5">
          {milestones.map((milestone) => (
            <StaggerItem key={milestone.year} className="border-b border-ivory-dark py-6 sm:border-b-0 sm:py-7">
              <p className="font-serif text-xl text-coffee-dark">{milestone.year}</p>
              <p className="mt-2 max-w-[22ch] font-sans text-sm leading-relaxed text-coffee-light">
                {milestone.event}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
