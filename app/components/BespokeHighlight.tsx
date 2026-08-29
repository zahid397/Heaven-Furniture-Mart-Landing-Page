import Image from 'next/image';
import {
  ArrowUpRight,
  CalendarCheck,
  CreditCard,
  Gem,
  Hammer,
  Ruler,
  Truck,
  type LucideIcon,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import FadeIn, { Stagger, StaggerItem } from '@/components/ui/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import { images, imageAlt } from '@/data/images';
import { whatsappLink, whatsappMessages } from '@/lib/site';

type TrustPoint = {
  icon: LucideIcon;
  label: string;
};

const trustPoints: TrustPoint[] = [
  { icon: CalendarCheck, label: 'Free design consultation' },
  { icon: Ruler, label: 'Fully bespoke — built to your space' },
  { icon: Gem, label: 'Premium wood & materials' },
  { icon: Hammer, label: 'Skilled in-house craftsmanship' },
  { icon: Truck, label: 'Delivery & installation included' },
  { icon: CreditCard, label: 'Easy payment options' },
];

export default function BespokeHighlight() {
  return (
    <section
      id="bespoke"
      className="on-dark border-b border-charcoal-light bg-charcoal py-24 text-ivory sm:py-28 lg:py-32"
    >
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="order-2 lg:order-1">
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-5 -translate-y-5 border border-brass/40"
              />

              <div className="relative aspect-[5/4] w-full overflow-hidden">
                <Image
                  src={images.bespoke}
                  alt={imageAlt.bespoke}
                  fill
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover"
                />
              </div>

              {/* Small detail crop - shows the finish work up close. */}
              <div className="relative -mt-14 ml-auto hidden w-40 overflow-hidden border-4 border-charcoal sm:block lg:w-48">
                <div className="relative aspect-square w-full">
                  <Image
                    src={images.bespokeDetail}
                    alt={imageAlt.bespokeDetail}
                    fill
                    sizes="192px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <SectionHeading
                tone="dark"
                eyebrow="Bespoke"
                title="Designed. Crafted. Customized."
                subtitle="Your space, your taste, your furniture — built from scratch."
              />
            </FadeIn>

            <Stagger className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <StaggerItem key={point.label}>
                    <div className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-brass"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className="font-sans text-sm leading-relaxed text-ivory/80">
                        {point.label}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>

            <FadeIn>
              <Button
                href={whatsappLink(whatsappMessages.quote)}
                variant="outline"
                size="lg"
                className="mt-12"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
