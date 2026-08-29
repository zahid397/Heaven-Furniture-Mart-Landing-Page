import { whatsappLink, whatsappMessages } from '@/lib/site';

export default function StickyMobileCTA() {
  return (
    <div className="on-dark fixed inset-x-0 bottom-0 z-40 border-t border-charcoal-light bg-charcoal/95 backdrop-blur md:hidden">
      <div className="px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <a
          href={whatsappLink(whatsappMessages.consultation)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[50px] w-full items-center justify-center bg-brass px-6 font-sans text-base font-medium text-charcoal transition-colors duration-300 ease-luxe active:bg-brass-dark"
        >
          Book free consultation
        </a>
      </div>
    </div>
  );
}
