"use client";

import { trackEvent } from "@/components/analytics";

export function CvDownloadButton() {
  return (
    <a
      href="/cv-erez-bekolli.jpg"
      download="Erez-Bekolli-CV.jpg"
      onClick={() => trackEvent("cv_download", { file: "cv-erez-bekolli.jpg" })}
      className="inline-flex min-h-11 items-center border border-line px-5 text-xs uppercase tracking-[0.24em] text-neutral-800 transition hover:bg-ink hover:text-paper lg:min-h-0 lg:py-3"
    >
      Download CV
    </a>
  );
}
