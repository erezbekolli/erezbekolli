"use client";

import { useRef, useState, useEffect } from "react";
import { FadeIn } from "@/components/fade-in";
import { ImageLightbox } from "@/components/image-lightbox";
import { trackEvent } from "@/components/analytics";

type ImageSectionProps = {
  title: string;
  images: string[];
  className?: string;
  containerClassName?: string;
  description?: string;
  bottomDescription?: string;
  bordered?: boolean;
  transparent?: boolean;
  altBase?: string;
};

export function ImageSection({
  title,
  images,
  className,
  containerClassName,
  description,
  bottomDescription,
  bordered = false,
  transparent = false,
  altBase
}: ImageSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const isConceptSection = title.toLowerCase() === "concept and diagrams";

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, [images]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const amount = isConceptSection ? container.clientWidth + 24 : container.clientWidth * 0.8;
      container.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  const getAlt = (index: number) =>
    `${altBase ? `${altBase} - ` : ""}${title.toLowerCase()} image ${index + 1}`;

  const openImage = (index: number) => {
    setSelectedIndex(index);
    trackEvent("image_open", {
      image: images[index],
      image_group: title
    });
  };

  if (!images || images.length === 0) return null;

  return (
    <section className={`px-5 py-12 sm:px-8 lg:px-12 lg:py-20 overflow-hidden relative group ${className || ""} ${containerClassName || ""}`}>
      <div className="mb-8 border-t border-line pt-4 flex flex-wrap justify-between items-center gap-3">
        <h2 className="max-w-[calc(100%-6rem)] text-xs uppercase tracking-[0.24em] text-quiet sm:max-w-none sm:tracking-[0.32em]">{title}</h2>
        {(canScrollLeft || canScrollRight) && (
          <div className="flex shrink-0 gap-1 lg:gap-2">
            <button onClick={() => scroll("left")} disabled={!canScrollLeft} className={`flex h-11 w-11 items-center justify-center transition-opacity lg:h-6 lg:w-6 ${!canScrollLeft ? "opacity-20 cursor-not-allowed" : "opacity-100 hover:text-dark"}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll("right")} disabled={!canScrollRight} className={`flex h-11 w-11 items-center justify-center transition-opacity lg:h-6 lg:w-6 ${!canScrollRight ? "opacity-20 cursor-not-allowed" : "opacity-100 hover:text-dark"}`}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-8 items-start lg:flex-row">
        {description && (
          <FadeIn className="w-full shrink-0 pt-4 lg:w-1/3">
            <p className="text-lg leading-8 text-quiet">{description}</p>
          </FadeIn>
        )}

        {isConceptSection ? (
          <div className="w-full min-w-0 overflow-hidden">
            <div
              ref={scrollContainerRef}
              onScroll={updateScrollButtons}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            >
              {images.map((image, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Open ${getAlt(index)}`}
                  onClick={() => openImage(index)}
                  className={`relative block aspect-[16/9] min-w-full shrink-0 snap-center ${!transparent && bordered ? "border border-line" : ""}`}
                >
                  <img
                    src={image}
                    alt={getAlt(index)}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className={`absolute inset-0 h-full w-full object-contain object-top ${transparent ? "mix-blend-multiply" : ""}`}
                    style={{ imageRendering: "auto" }}
                  />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            onScroll={updateScrollButtons}
            className={`flex w-full gap-6 overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden ${transparent ? "lg:ml-auto" : ""}`}
          >
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Open ${getAlt(index)}`}
                onClick={() => openImage(index)}
                className={`relative block aspect-[4/3] w-[82vw] shrink-0 sm:w-[70vw] lg:w-[45vw] ${!transparent && bordered ? "border border-line" : ""}`}
              >
                <img
                  src={image}
                  alt={getAlt(index)}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className={`absolute inset-0 h-full w-full object-cover ${transparent ? "mix-blend-multiply" : ""}`}
                  style={{ imageRendering: "auto" }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {bottomDescription && (
        <FadeIn className="mt-8 lg:w-1/2">
          <p className="text-lg leading-8 text-quiet">{bottomDescription}</p>
        </FadeIn>
      )}

      <ImageLightbox
        images={images}
        currentIndex={selectedIndex}
        alt={getAlt}
        onClose={() => setSelectedIndex(null)}
        onChange={setSelectedIndex}
      />
    </section>
  );
}