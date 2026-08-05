import { useRef, useState, useCallback } from 'react';

const PDF_OPTIONS = {
  margin: 0,
  filename: 'Rasheedah_Matyeni_CV.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', windowWidth: 900 },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
};

export function useCvDownload() {
  const cvRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const download = useCallback(async () => {
    if (!cvRef.current || downloading) return;
    setDownloading(true);
    try {
      const { default: html2pdf } = await import('html2pdf.js');
      await html2pdf().set(PDF_OPTIONS).from(cvRef.current).save();
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setDownloading(false);
    }
  }, [downloading]);

  return { cvRef, downloading, download };
}
