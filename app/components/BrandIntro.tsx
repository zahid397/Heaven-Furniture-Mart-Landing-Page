import FadeIn from '@/components/ui/FadeIn';

export default function BrandIntro() {
  return (
    <section className="border-b border-ivory-dark bg-ivory py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <span className="rule-brass mx-auto" aria-hidden="true" />

          <p className="mt-10 font-serif text-2xl leading-relaxed text-coffee-dark sm:text-3xl lg:text-4xl">
            Bespoke furniture &amp; interior styling, crafted in Chattogram.
          </p>

          <p className="mt-6 font-sans text-base leading-relaxed text-coffee-light sm:text-lg">
            We design, craft, and customize every piece around your space — not pulled off a shelf.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
