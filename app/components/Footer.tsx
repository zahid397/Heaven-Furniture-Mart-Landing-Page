'use client';

import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { site, whatsappLink, whatsappMessages } from '@/lib/site';

/**
 * Lucide deprecated its brand glyphs, so the three social marks are inlined
 * here. They are decorative next to a visible text label.
 */
function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.84-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  );
}

function YoutubeMark() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.14C19.5 3.85 12 3.85 12 3.85s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.39 0 12 0 12s0 3.61.5 5.5a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.61 24 12 24 12s0-3.61-.5-5.5ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
    </svg>
  );
}

const socials = [
  { label: 'Facebook', href: site.social.facebook, Mark: FacebookMark },
  { label: 'Instagram', href: site.social.instagram, Mark: InstagramMark },
  { label: 'YouTube', href: site.social.youtube, Mark: YoutubeMark },
];

export default function Footer() {
  const [message, setMessage] = useState('');

  /**
   * No backend on this project, so the message box does the honest thing:
   * it hands whatever the visitor typed straight to WhatsApp.
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = message.trim() || whatsappMessages.consultation;
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer');
    setMessage('');
  };

  return (
    <footer id="contact" className="on-dark bg-charcoal text-ivory">
      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-1 divide-y divide-charcoal-light md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="pb-10 md:pb-0 md:pr-10">
            <p className="font-serif text-2xl text-ivory">Heaven Furniture Mart</p>
            <p className="mt-2 font-sans text-xs uppercase tracking-eyebrow text-brass">
              {site.tagline}
            </p>

            <address className="mt-8 space-y-4 font-sans text-sm not-italic text-ivory/70">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.landmark}
                  <br />
                  {site.address.locality}, {site.address.countryName}
                </span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brass" strokeWidth={1.5} aria-hidden="true" />
                <a href={`tel:${site.phoneE164}`} className="hover:text-brass">
                  {site.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brass" strokeWidth={1.5} aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-brass">
                  {site.email}
                </a>
              </p>
            </address>
          </div>

          <div className="py-10 md:px-10 md:py-0">
            <h2 className="font-sans text-xs uppercase tracking-eyebrow text-ivory/60">Follow the work</h2>
            <ul className="mt-6 space-y-4">
              {socials.map(({ label, href, Mark }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-sans text-sm text-ivory/70 transition-colors duration-300 ease-luxe hover:text-brass"
                  >
                    <span className="text-brass">
                      <Mark />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-sans text-sm leading-relaxed text-ivory/60">
              New pieces, showroom shots and finished projects go up first on Facebook and Instagram.
            </p>
          </div>

          <div className="pt-10 md:pl-10 md:pt-0">
            <h2 className="font-sans text-xs uppercase tracking-eyebrow text-ivory/60">Tell us what you need</h2>
            <p className="mt-6 font-sans text-sm leading-relaxed text-ivory/70">
              Type it here and we will open WhatsApp with your message ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-6">
              <label htmlFor="footer-message" className="sr-only">
                Your message to Heaven Furniture Mart
              </label>
              <input
                id="footer-message"
                name="message"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="A 3-seater sofa for my flat…"
                className="min-h-[48px] w-full border border-charcoal-light bg-charcoal-dark px-4 font-sans text-sm text-ivory placeholder:text-ivory/40"
              />
              <button
                type="submit"
                className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center gap-2 bg-brass px-6 font-sans text-sm font-medium text-charcoal transition-colors duration-300 ease-luxe hover:bg-brass-light active:bg-brass-dark"
              >
                Send on WhatsApp
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-light">
        <div className="container-page flex flex-col gap-2 py-6 text-center font-sans text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed with ❤️ in Chattogram</p>
        </div>
      </div>
    </footer>
  );
}
