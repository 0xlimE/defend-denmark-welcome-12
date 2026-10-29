import { useEffect, useRef } from "react";
import { Printer } from "lucide-react";

interface PrintHeaderProps {
  /** Document title as it should appear on the printed copy. */
  title: string;
  /** e.g. "Version 2.0" */
  version: string;
  /** e.g. "13 October 2026" */
  effectiveDate: string;
  /** Site path of this document, e.g. "/terms-of-service" */
  path: string;
  /** Contract schedule reference, e.g. "Schedule 2" */
  schedule?: string;
}

const formatPrintDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

/**
 * Renders a "Print / Save as PDF" button on screen, and a formal document
 * header that only appears on the printed copy. The printed-on date is written
 * to the DOM imperatively so it is correct whether printing is triggered by the
 * button or by the browser's own print command.
 */
export const PrintHeader = ({ title, version, effectiveDate, path, schedule }: PrintHeaderProps) => {
  const dateRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stamp = () => {
      if (dateRef.current) dateRef.current.textContent = formatPrintDate(new Date());
    };
    stamp();
    window.addEventListener("beforeprint", stamp);
    return () => window.removeEventListener("beforeprint", stamp);
  }, []);

  const handlePrint = () => {
    if (dateRef.current) dateRef.current.textContent = formatPrintDate(new Date());
    window.print();
  };

  return (
    <>
      <div className="no-print flex justify-end mb-4">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded border border-primary/30 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print / Save as PDF
        </button>
      </div>

      <div className="print-only print-doc-header">
        <p className="print-org">Defend Denmark ApS · CVR 45824578</p>
        <h1 className="print-title">{title}</h1>
        {schedule && <p className="print-schedule">Also referenced as {schedule}</p>}
        <p className="print-meta">
          {version} · Effective Date: {effectiveDate}
        </p>
        <p className="print-meta">
          Printed to PDF on <span ref={dateRef}>{formatPrintDate(new Date())}</span>
        </p>
        <p className="print-source">Source: defenddenmark.dk{path}</p>
      </div>
    </>
  );
};
