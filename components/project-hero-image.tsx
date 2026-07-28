"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "@/components/image-lightbox";
import { trackEvent } from "@/components/analytics";

type ProjectHeroImageProps = {
  src: string;
  alt: string;
};

export function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={`Open ${alt} hero image`}
        onClick={() => {
          setOpen(true);
          trackEvent("image_open", {
            image: src,
            image_group: "Project hero"
          });
        }}
        className="relative block h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={90}
          className="object-cover"
        />
      </button>

      <ImageLightbox
        images={[src]}
        currentIndex={open ? 0 : null}
        alt={() => `${alt} hero image`}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
