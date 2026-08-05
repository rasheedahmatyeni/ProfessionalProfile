import { Award, Download, Eye } from 'lucide-react';
import { certificationGroups } from '../data/content';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';

const totalCerts = certificationGroups.reduce(
  (sum, g) => sum + g.certifications.length,
  0
);

function CourseraMark() {
  return (
    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2]">
      <svg viewBox="0 0 48 48" width="20" height="20" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24 4a20 20 0 1 0 0.001 0M24 38.5c-7.7 0-14-6.3-14-14S16.3 10.5 24 10.5c6.4 0 11.8 4.3 13.4 10.2l-6.5 1C29.9 18.7 27.2 17 24 17c-4.1 0-7.5 3.4-7.5 7.5S19.9 32 24 32c3.2 0 5.9-1.7 6.9-4.7l6.5 1C35.8 36.2 30.4 38.5 24 38.5"
        />
      </svg>
    </span>
  );
}

export function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="A learning journey"
        intro={
          <>
            {totalCerts}+ certifications across AI, machine learning, prompt
            engineering, data science, and ethics — a deliberate, ongoing
            investment in building technology responsibly.
          </>
        }
      />

      <section className="container-content py-20">
        <div className="space-y-16">
          {certificationGroups.map((group, gi) => (
            <div key={group.id}>
              <Reveal>
                <div className="flex items-end justify-between gap-4 border-b border-ivory-300 pb-5">
                  <div>
                    <h2 className="font-serif text-2xl font-semibold text-teal-700 sm:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-ink-300">
                      {group.description}
                    </p>
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                    {group.certifications.length}
                  </span>
                </div>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.certifications.map((cert, ci) => (
                  <Reveal key={cert.name} delay={Math.min(ci, 6) * 50}>
                    <div className="flex h-full flex-col rounded-2xl border border-ivory-200 bg-ivory-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-warm">
                      {/* logo */}
                      <div className="flex items-start gap-3">
                        {cert.logo === 'coursera' ? (
                          <CourseraMark />
                        ) : (
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                            <Award size={18} />
                          </span>
                        )}
                      </div>

                      {/* title + issuer */}
                      <h3 className="mt-4 flex-1 text-sm font-semibold leading-snug text-ink-600">
                        {cert.name}
                      </h3>
                      {cert.issuer && (
                        <p className="mt-1 text-xs text-slate-400">
                          {cert.issuer}
                        </p>
                      )}

                      {/* action buttons */}
                      <div className="mt-5 flex gap-2">
                        {cert.pdf ? (
                          <>
                            <a
                              href={cert.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-amber-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-amber-600"
                            >
                              <Eye size={13} />
                              View
                            </a>
                            <a
                              href={cert.pdf}
                              download
                              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-amber-500 bg-ivory-50 px-3 py-2 text-xs font-semibold text-amber-600 transition-colors hover:bg-amber-50"
                            >
                              <Download size={13} />
                              Download
                            </a>
                          </>
                        ) : (
                          <>
                            <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-amber-200/60 px-3 py-2 text-xs font-semibold text-amber-400 cursor-not-allowed select-none">
                              <Eye size={13} />
                              View
                            </span>
                            <span className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-amber-200 bg-ivory-50 px-3 py-2 text-xs font-semibold text-amber-300 cursor-not-allowed select-none">
                              <Download size={13} />
                              Download
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              {gi < certificationGroups.length - 1 && <div className="h-2" />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
