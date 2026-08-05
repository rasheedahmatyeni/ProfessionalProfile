import { GraduationCap, Trophy } from 'lucide-react';
import { education, achievements } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

export function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education & Achievements"
        title="A foundation of learning"
        intro="From an IT diploma to advanced study in information resource management — and a growing portfolio of hackathons and applied projects along the way."
      />

      {/* Education timeline */}
      <section className="container-content py-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <GraduationCap size={20} />
            </span>
            <h2 className="font-serif text-3xl font-semibold text-teal-700">
              Academic timeline
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 max-w-3xl">
          <ol className="relative border-l border-ivory-300 pl-8">
            {education.map((item, i) => (
              <li key={item.title} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[2.55rem] flex h-6 w-6 items-center justify-center rounded-full border-2 border-amber-500 bg-ivory-50">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                </span>
                <Reveal delay={i * 100}>
                  <div className="rounded-2xl border border-ivory-200 bg-ivory-50 p-7 transition-all duration-300 hover:border-amber-300 hover:shadow-soft">
                    <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                      {item.period}
                    </span>
                    <h3 className="mt-4 font-serif text-xl font-semibold text-teal-700">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-ink-300">
                      {item.institution}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-400">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-ivory-200 bg-ivory-200">
        <div className="container-content py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Trophy size={20} />
              </span>
              <h2 className="font-serif text-3xl font-semibold text-teal-700">
                Achievements
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-ivory-300 bg-ivory-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-warm">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-ink-700">
                    <Trophy size={20} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-teal-700">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-amber-700">
                    {item.context}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
