import { Download, Loader2 } from 'lucide-react';
import { CVDocument } from '../components/CVDocument';
import { useCvDownload } from '../hooks/useCvDownload';

export function CVPage() {
  const { cvRef, downloading, download } = useCvDownload();

  return (
    <>
      {/* Toolbar — hidden when printing */}
      <div className="no-print sticky top-16 z-40 border-b border-ivory-200 bg-ivory-100/90 backdrop-blur-md">
        <div className="container-content flex items-center justify-between gap-4 py-3">
          <p className="text-sm text-ink-300">
            Preview — click <strong className="text-ink-600">Download CV</strong> to save as PDF
          </p>
          <button
            onClick={download}
            disabled={downloading}
            className="flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-warm transition-all duration-200 hover:bg-amber-600 active:scale-95 disabled:cursor-wait disabled:opacity-70"
          >
            {downloading ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                Generating…
              </>
            ) : (
              <>
                <Download size={15} />
                Download CV
              </>
            )}
          </button>
        </div>
      </div>

      {/* CV document */}
      <div className="cv-page min-h-screen py-10 print:py-0">
        <CVDocument ref={cvRef} />
      </div>
    </>
  );
}
