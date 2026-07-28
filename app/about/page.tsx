import Image from "next/image";
import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { CvDownloadButton } from "@/components/cv-download-button";

export const metadata: Metadata = {
  title: "About | Architecture, Visualization & Research",
  description:
    "Learn about Erëz Bekolli, an architect specializing in architectural design, visualization, research, heritage, and digital workflows.",
  openGraph: {
    title: "About Erëz Bekolli | Architect",
    description:
      "Erëz Bekolli is an architect specializing in architectural design, visualization, research, and digital workflows.",
    images: ["/images/about/PROFILE.JPG"]
  }
};

export default function AboutPage() {
  return (
    <main className="px-5 pb-10 pt-28 sm:px-8 lg:px-12 min-h-screen">
      <div className="border-t border-line pt-8">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full mt-6">
            
            {/* Left Side Column: Profile image + Exact Matching Contact Layout */}
            <div className="lg:col-span-4 w-full max-w-[280px]">
              
              {/* Image Container */}
              <div className="w-full aspect-[4/5] relative bg-neutral-100 overflow-hidden border border-line mb-8">
                <Image
                  src="/images/about/PROFILE.JPG"
                  alt="Erëz Bekolli"
                  fill
                  priority
                  quality={100}
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Exact Replica alignment from image_69e2f4.png with colons included */}
              <div className="space-y-3 text-xs tracking-[0.18em] text-neutral-800 font-light sm:tracking-[0.26em]">
                
                {/* Email Row */}
                <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline sm:grid-cols-[6.5rem_1fr]">
                  <span className="text-neutral-400 uppercase font-normal">Contact:</span>
                  <a 
                    href="mailto:erezbekolli@gmail.com" 
                    className="inline-block -my-3 break-words py-3 lowercase tracking-normal transition hover:text-quiet lg:my-0 lg:py-0"
                  >
                    erezbekolli@gmail.com
                  </a>
                </div>

                {/* Phone Row */}
                <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline sm:grid-cols-[6.5rem_1fr]">
                  <span className="text-neutral-400 uppercase font-normal">Phone:</span>
                  <span className="tracking-[0.15em] text-neutral-600">
                    +383 49 469 507
                  </span>
                </div>

                {/* LinkedIn Row */}
                <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline sm:grid-cols-[6.5rem_1fr]">
                  <span className="text-neutral-400 uppercase font-normal">Linkedin:</span>
                  <a 
                    href="https://www.linkedin.com/in/erëz-bekolli-0127482a1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block -my-3 break-words py-3 lowercase tracking-normal transition hover:text-quiet lg:my-0 lg:py-0"
                  >
                    www.linkedin.com/in/erëz-bekolli-0127482a1
                  </a>
                </div>

              </div>

              <div className="mt-8">
                <CvDownloadButton />
              </div>

            </div>

            {/* Right Side Column: Biography texts */}
            <div className="lg:col-span-8 max-w-2xl text-base text-neutral-600 leading-relaxed font-light space-y-5">
              <h1 className="text-xs uppercase tracking-[0.32em] text-neutral-800 mb-6 font-medium">
                Erëz Bekolli / About
              </h1>
              
              <p>
                I am an architectural designer interested in the relationship between architecture, culture, and place. My work explores contextual design, adaptive reuse, and contemporary interventions within historic and evolving environments, with a particular interest in how architecture can engage with local identity and heritage.
              </p>
              
              <p>
                Through academic and independent projects, I have developed a design approach that combines research, conceptual thinking, and technical resolution. I am drawn to projects that balance innovation with respect for context, exploring how contemporary architecture can create meaningful dialogue with existing landscapes, structures, and communities.
              </p>
              
              <p>
                Alongside architectural design, visualization plays an important role in my process, helping communicate ideas through atmosphere, materiality, and spatial storytelling. Whether working through drawings, models, or visualizations, I aim to create thoughtful and well-resolved architecture that responds to both people and place.
              </p>

              <p>
                Beyond architectural design and visualization, I developed and designed my own portfolio website, combining architectural presentation with digital design and web development.
              </p>
            </div>

          </div>
        </FadeIn>
      </div>
    </main>
  );
}
