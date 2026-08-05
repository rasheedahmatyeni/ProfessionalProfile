import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-200 to-ivory-100">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(212, 154, 63, 0.12), transparent 45%), radial-gradient(circle at 85% 0%, rgba(31, 90, 90, 0.10), transparent 40%)',
        }}
      />
      <div className="container-content relative py-20 sm:py-28">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-teal-700 sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={160}>
            <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">
              {intro}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
