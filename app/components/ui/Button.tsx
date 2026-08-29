import type { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'quiet';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide ' +
  'transition-colors duration-300 ease-luxe';

const variants: Record<Variant, string> = {
  // charcoal on brass measures 6.48:1 - passes AA for normal text
  primary: 'bg-brass text-charcoal hover:bg-brass-light active:bg-brass-dark',
  // dark sections only: brass on charcoal measures 6.48:1
  outline: 'border border-brass text-brass hover:bg-brass hover:text-charcoal',
  quiet: 'border border-ivory-dark bg-ivory-light text-coffee hover:border-brass',
};

const sizes: Record<Size, string> = {
  md: 'min-h-[44px] px-6 py-3 text-sm',
  lg: 'min-h-[52px] px-8 py-4 text-base',
};

type ButtonProps = {
  children: ReactNode;
  /** When present the button renders as an anchor. */
  href?: string;
  /** Anchors default to opening in a new tab; set false for in-page links. */
  external?: boolean;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  external = true,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
