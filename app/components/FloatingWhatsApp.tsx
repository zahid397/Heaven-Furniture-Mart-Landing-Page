import { whatsappLink, whatsappMessages } from '@/lib/site';

/** Lucide has no WhatsApp glyph, so the official mark is inlined. */
function WhatsappMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.79 9.79 0 0 1-1.5-5.23c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.87 6.93c0 5.41-4.4 9.82-9.81 9.82ZM20.4 3.6A11.72 11.72 0 0 0 12.05 0C5.58 0 .31 5.27.31 11.75c0 2.07.54 4.1 1.57 5.88L.21 24l6.51-1.71a11.7 11.7 0 0 0 5.33 1.29h.01c6.47 0 11.74-5.27 11.74-11.75 0-3.14-1.22-6.09-3.4-8.31Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(whatsappMessages.consultation)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-card-hover transition-transform duration-300 ease-luxe hover:scale-105 sm:right-6 md:bottom-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring"
      />
      <span className="relative">
        <WhatsappMark />
      </span>
    </a>
  );
}
