import type { ReactNode } from 'react';

type Tone = 'light' | 'dark';

type SectionHeadingProps = {
  /** Small label above the title. */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Background the heading sits on - drives text colours. */
  tone?: Tone;
  align?: 'left' | 'center';
  /** Heading level. h1 is reserved for the hero. */
  as?: 'h2' | 'h3';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = 'light',
  align = 'left',
  as: Tag = 'h2',
  className = '',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col ${alignment} ${className}`.trim()}>
      <span className="rule-brass" aria-hidden="true" />

      {eyebrow ? (
        <span
          className={`mt-5 font-sans text-xs font-medium uppercase tracking-eyebrow ${
            // brass on ivory is only 2.32:1, so light sections use coffee-light (8.78:1)
            isDark ? 'text-brass' : 'text-coffee-light'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}

      <Tag
        className={`mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl ${
          isDark ? 'text-ivory' : 'text-coffee-dark'
        }`}
      >
        {title}
      </Tag>

      {subtitle ? (
        <p
          className={`mt-5 max-w-xl font-sans text-base leading-relaxed sm:text-lg ${
            isDark ? 'text-ivory/70' : 'text-coffee-light'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
