"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { trackEvent } from "@/components/analytics";

type ImageLightboxProps = {
  images: string[];
  currentIndex: number | null;
  alt: (index: number) => string;
  onClose: () => void;
  onChange?: (index: number) => void;
};

export function ImageLightbox({
  images,
  currentIndex,
  alt,
  onClose,
  onChange
}: ImageLightboxProps) {
  const [scale, setScale] = useState(1);
  const open = currentIndex !== null;
  const image = open ? images[currentIndex] : null;
  const hasNavigation = images.length > 1;

  useEffect(() => {
    setScale(1);
  }, [currentIndex]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, currentIndex]);

  if (!open || !image) return null;

  function setZoom(nextScale: number) {
    const boundedScale = Math.min(3, Math.max(1, nextScale));
    setScale(boundedScale);
    trackEvent("image_zoom", {
      image: image ?? undefined,
      zoom_level: Number(boundedScale.toFixed(2))
    });
  }

  function go(direction: -1 | 1) {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + direction + images.length) % images.length;
    onChange?.(nextIndex);
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/92 p-4 text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div className="absolute right-4 top-4 z-10 flex gap-2">
        <button
          type="button"
          aria-label="Zoom out"
          onClick={(event) => {
            event.stopPropagation();
            setZoom(scale - 0.25);
          }}
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-xs transition hover:bg-white hover:text-black lg:h-8 lg:w-8"
        >
          -
        </button>
        <button
          type="button"
          aria-label="Zoom in"
          onClick={(event) => {
            event.stopPropagation();
            setZoom(scale + 0.25);
          }}
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-xs transition hover:bg-white hover:text-black lg:h-8 lg:w-8"
        >
          +
        </button>
        <button
          type="button"
          aria-label="Close image viewer"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-xs uppercase tracking-[0.18em] transition hover:bg-white hover:text-black lg:h-8 lg:w-8"
        >
          X
        </button>
      </div>

      {hasNavigation && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 transition hover:bg-white hover:text-black"
          >
            <span aria-hidden="true">{"<"}</span>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 transition hover:bg-white hover:text-black"
          >
            <span aria-hidden="true">{">"}</span>
          </button>
        </>
      )}

      <div
        className="h-full w-full overflow-auto"
        onClick={(event) => event.stopPropagation()}
        onWheel={(event) => {
          if (!event.ctrlKey && Math.abs(event.deltaY) < 40) return;
          event.preventDefault();
          setZoom(scale + (event.deltaY < 0 ? 0.2 : -0.2));
        }}
      >
        <div className="relative mx-auto h-full min-h-[70vh] w-full max-w-6xl">
          <Image
            src={image}
            alt={alt(currentIndex)}
            fill
            sizes="100vw"
            quality={95}
            className="object-contain transition-transform duration-300 ease-out"
            style={{ transform: `scale(${scale})` }}
            onDoubleClick={() => setZoom(scale === 1 ? 2 : 1)}
          />
        </div>
      </div>
    </div>
  );
}
