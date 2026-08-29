'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { navLinks, site, whatsappLink, whatsappMessages } from '@/lib/site';

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);

  // Solid background after 50px, transparent over the hero before that.
  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  // Escape closes the overlay; body scroll stays locked while it is open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, closeMenu]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-luxe ${
        solid ? 'border-b border-ivory-dark bg-ivory' : 'border-b border-transparent bg-transparent'
      } ${solid ? '' : 'on-dark'}`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a
          href="#top"
          className="flex flex-col leading-none"
          aria-label={`${site.name} - back to top`}
        >
          <span
            className={`font-serif text-xl tracking-wide sm:text-2xl ${
              solid ? 'text-coffee-dark' : 'text-ivory'
            }`}
          >
            Heaven
          </span>
          <span
            className={`mt-1 font-sans text-[10px] font-medium uppercase tracking-eyebrow ${
              solid ? 'text-coffee-light' : 'text-brass'
            }`}
          >
            Furniture Mart
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-sm transition-colors duration-300 ease-luxe ${
                solid ? 'text-coffee hover:text-brass-dark' : 'text-ivory/80 hover:text-brass'
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button href={whatsappLink(whatsappMessages.consultation)} size="md">
            Book free consultation
          </Button>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setOpen(true)}
          className={`-mr-2 flex h-11 w-11 items-center justify-center md:hidden ${
            solid ? 'text-coffee-dark' : 'text-ivory'
          }`}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col bg-ivory md:hidden"
        >
          <div className="container-page flex h-20 items-center justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="-mr-2 flex h-11 w-11 items-center justify-center text-coffee-dark"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-page flex flex-1 flex-col justify-center">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex min-h-[56px] items-center border-b border-ivory-dark font-serif text-3xl text-coffee-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button
              href={whatsappLink(whatsappMessages.consultation)}
              size="lg"
              className="mt-10 w-full"
              onClick={closeMenu}
            >
              Book free consultation
            </Button>

            <p className="mt-8 font-sans text-sm text-coffee-light">
              {site.address.street}, {site.address.locality}
              <br />
              {site.phoneDisplay}
            </p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
