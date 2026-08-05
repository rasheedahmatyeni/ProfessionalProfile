import { Briefcase, CalendarDays, Check, MapPin } from 'lucide-react';
import { experience, profile, workHistory } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

export function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Work Experience"
        title="Learning by doing"
        intro="A timeline of roles that shaped my professional skills — from brand representation and international childcare to legal administration and an IT internship rooted in software and AI."
      />

      <section className="container-content py-20">
        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-amber-400 via-ivory-300 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          {/* Current role — IT Intern */}
          <Reveal>
            <div className="relative mb-12 pl-12 sm:pl-0">
              <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-ink-700 shadow-soft ring-4 ring-ivory-100 sm:left-1/2 sm:-translate-x-1/2">
                <Briefcase size={16} />
              </span>
              <div className="sm:w-1/2 sm:pr-10 sm:text-right">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
                  Current Role
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-teal-700">
                  {experience.role}
                </h3>
                <p className="text-sm font-medium text-amber-700">
                  {experience.company}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-ink-300 sm:justify-end">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={12} /> {experience.period}
                  </span>
                  <span>·</span>
                  <span>{experience.duration}</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-400">
                  An early-career role focused on building real solutions with a
                  team, learning industry best practices, and growing into a
                  well-rounded technology professional.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Work history timeline */}
          {workHistory.map((entry, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal key={entry.id} delay={i * 80}>
                <div className="relative mb-12 pl-12 sm:pl-0">
                  <span className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-ivory-300 bg-ivory-50 text-amber-600 shadow-soft ring-4 ring-ivory-100 sm:left-1/2 sm:-translate-x-1/2">
                    <Briefcase size={15} />
                  </span>

                  <div
                    className={`sm:w-1/2 ${
                      isLeft ? 'sm:pr-10 sm:text-right' : 'sm:ml-auto sm:pl-10'
                    }`}
                  >
                    <div className="group rounded-3xl border border-ivory-200 bg-ivory-50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-soft">
                      <h3 className="font-serif text-lg font-semibold text-teal-700">
                        {entry.role}
                      </h3>
                      <div
                        className={`mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-300 sm:${
                          isLeft ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="font-medium text-amber-700">
                          {entry.organisation}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={11} /> {entry.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={11} /> {entry.period}
                        </span>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-ink-400">
                        {entry.summary}
                      </p>
                      <ul
                        className={`mt-4 space-y-2 ${
                          isLeft ? 'sm:text-right' : ''
                        }`}
                      >
                        {entry.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2 text-sm leading-relaxed text-ink-400 ${
                              isLeft ? 'sm:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                              <Check size={11} />
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Quote */}
        <Reveal delay={200}>
          <div className="mx-auto mt-16 max-w-3xl rounded-3xl bg-teal-700 p-8 text-ivory-50 sm:p-10">
            <p className="font-serif text-lg leading-relaxed sm:text-xl">
              "Every role — legal, international, creative, or technical — has
              sharpened the same toolkit: precision, adaptability, and clear
              communication. I bring all of it into technology."
            </p>
            <p className="mt-4 text-sm text-teal-100">— {profile.name}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
