import { Heart, Compass, Target, Code, Brain, Lightbulb, Puzzle } from 'lucide-react';
import { profile } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

const interests = [
  { icon: Code, label: 'Software Development' },
  { icon: Brain, label: 'Artificial Intelligence' },
  { icon: Lightbulb, label: 'Digital Innovation' },
  { icon: Puzzle, label: 'Problem-Solving' },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title={`Hi, I'm ${profile.firstName}.`}
        intro={
          <>
            An IT professional with a genuine love for learning — driven by
            curiosity about how technology, and especially AI, can turn everyday
            problems into meaningful solutions.
          </>
        }
      />

      {/* Story */}
      <section className="container-content py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ivory-200">
                <img
                  src="/IMG_6686.png"
                  alt={profile.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <h2 className="font-serif text-3xl font-semibold text-teal-700">
                My story
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-ink-400">
                My journey into technology started with a simple belief — that
                the right tools, used thoughtfully, can change outcomes for
                people. That belief carried me through an Information Technology
                Management diploma and into an Advanced Diploma in Information
                Resource Management, where I grew to appreciate not just how
                systems work, but why they matter.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-ink-400">
                Today, as an IT Intern at CAPACITI GQ, I get to live that belief
                every day. I collaborate with a team to build technology
                solutions, I work with AI-powered development platforms, and I'm
                continuously sharpening the skills that turn an idea into
                something real — whether that's a rural emergency app, a
                networking solution for an NPO, or an AI system that triages
                support tickets.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-ink-400">
                What ties all of it together is a warmth for the human side of
                technology. I'm not just collecting certifications or shipping
                features — I'm learning to build responsibly, to ask better
                questions, and to grow into a developer who uses AI to amplify,
                not replace, human judgement.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3 pt-2">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="inline-flex items-center gap-2 rounded-full border border-ivory-300 bg-ivory-50 px-4 py-2 text-sm font-medium text-ink-500"
                  >
                    <interest.icon size={15} className="text-amber-600" />
                    {interest.label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-y border-ivory-200 bg-ivory-200">
        <div className="container-content py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-ivory-300 bg-ivory-50 p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Compass size={22} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-teal-700">
                  Vision
                </h3>
                <p className="mt-3 text-ink-400">
                  To become a software developer specialising in AI-powered
                  solutions — building technology that is practical, human, and
                  creates real value for the people and communities it serves.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-ivory-300 bg-ivory-50 p-9">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Heart size={22} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-teal-700">
                  Mission
                </h3>
                <p className="mt-3 text-ink-400">
                  To learn continuously, collaborate generously, and apply modern
                  tools — especially AI — to solve meaningful problems with
                  care, integrity, and a genuine respect for the people behind
                  the work.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-8 rounded-3xl bg-teal-700 p-9 text-ivory-50">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-ink-700">
                <Target size={22} />
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold">
                Career goal
              </h3>
              <p className="mt-3 max-w-2xl text-teal-100">
                To grow into a software developer specialising in AI-powered
                solutions — someone who can move confidently from research to
                implementation, and who builds with both ambition and
                responsibility.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
