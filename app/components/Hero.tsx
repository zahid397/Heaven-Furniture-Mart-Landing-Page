import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/ui/FadeIn';
import { images, imageAlt } from '@/data/images';
import { whatsappLink, whatsappMessages } from '@/lib/site';

export default function Hero() {
  return (
    <section
      id="top"
      className="on-dark relative flex min-h-screen items-center overflow-hidden bg-charcoal pb-16 pt-28 sm:pb-24 lg:pb-28 lg:pt-36"
    >
      {/* Ambient warmth so the charcoal does not read as flat black. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_20%,rgba(197,160,89,0.10),transparent_70%)]"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* 7/5 split, not 6/6: at xl the headline needs the extra column. */}
          <div className="lg:col-span-7">
            <FadeIn immediate>
              <span className="rule-brass" aria-hidden="true" />
              <span className="mt-5 block font-sans text-xs font-medium uppercase tracking-eyebrow text-brass">
                Bespoke furniture &middot; Chattogram
              </span>
            </FadeIn>

            <FadeIn immediate delay={0.15}>
              <h1 className="mt-5 font-serif text-4xl leading-tight text-ivory sm:text-5xl lg:text-6xl xl:text-[64px]">
                Furniture,
                <br />
                Crafted <span className="text-brass">Around You.</span>
              </h1>
            </FadeIn>

            <FadeIn immediate delay={0.3}>
              <p className="mt-6 max-w-md font-sans text-lg font-light leading-relaxed text-ivory/70">
                Bespoke furniture &amp; interior styling, crafted in Chattogram.
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.45}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={whatsappLink(whatsappMessages.consultation)} size="lg">
                  Book free consultation
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Button>
                <a
                  href="#collections"
                  className="font-sans text-sm text-ivory/70 underline-offset-8 transition-colors duration-300 ease-luxe hover:text-brass hover:underline"
                >
                  See the collections
                </a>
              </div>
            </FadeIn>

            <FadeIn immediate delay={0.6}>
              <div className="mt-8 flex items-center gap-4 border-t border-charcoal-light pt-5 lg:mt-12 lg:pt-6">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                <p className="font-sans text-sm text-ivory/60">
                  Trusted by hundreds of happy homeowners
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn immediate delay={0.35} y={28} className="lg:col-span-5">
            {/*
              This wrapper is exactly the size of the photo, so the offset brass
              frame lands 24px down-right of the image edge - not of a padded
              parent, which is what the first version did wrong.
            */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden translate-x-6 translate-y-6 border border-brass/40 lg:block"
              />

              {/* 3:4 on phones keeps the top of the photo above the fold. */}
              <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={images.hero}
                  alt={imageAlt.hero}
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 88vw, 38vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
