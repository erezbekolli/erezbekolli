"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-paper/88 px-5 py-2 backdrop-blur-sm sm:px-8 lg:px-12 lg:py-4">
      {/* Updated grid setup to perfectly hold four inline header elements */}
      <nav className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-2 text-[10px] uppercase tracking-[0.16em] sm:gap-4 sm:text-xs sm:tracking-[0.22em] lg:gap-6 lg:tracking-[0.26em]">
        <Link href="/" className="inline-flex min-h-11 max-w-fit items-center whitespace-nowrap transition hover:text-quiet lg:min-h-0">
          Erëz Bekolli
        </Link>
        
        {/* Added About link right before Projects */}
        <Link href="/about" className="inline-flex min-h-11 items-center whitespace-nowrap transition hover:text-quiet lg:min-h-0">
          About
        </Link>

        <Link href="/#projects" className="inline-flex min-h-11 items-center whitespace-nowrap transition hover:text-quiet lg:min-h-0">
          Projects
        </Link>

        <button
          type="button"
          aria-label="Toggle dark mode"
          onClick={() => setDark((value) => !value)}
          className="h-11 w-11 border border-line text-[10px] transition hover:bg-ink hover:text-paper lg:h-7 lg:w-7"
        >
          {dark ? "L" : "D"}
        </button>
      </nav>
    </header>
  );
}
