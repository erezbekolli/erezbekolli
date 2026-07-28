import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <section className="px-5 pb-10 pt-28 sm:px-8 lg:px-12">
        
        {/* Top banner line above the divider */}
        <FadeIn className="w-full mb-8">
          <h1 className="text-xs uppercase tracking-[0.32em] text-neutral-800">
            Erëz Bekolli / Architecture & Visualization
          </h1>
        </FadeIn>

        {/* Horizontal border-line layout with full-width cinematic landscape feature image */}
        <div className="border-t border-line pt-8">
          <FadeIn className="w-full">
            <div className="w-full aspect-[4/3] relative bg-neutral-100 overflow-hidden border border-line">
              <Image
                src="/images/home-banner.jpg"
                alt="Featured Architectural Visualization"
                fill
                priority
                quality={90}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section id="projects" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Header line */}
        <div className="mb-14 border-t border-line pt-6">
          <h2 className="text-xs uppercase tracking-[0.32em] text-quiet">
            Selected Projects
          </h2>
        </div>

        {/* Modified Layout Grid: 2 columns on tablets and desktops for a perfect 2 and 2 grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
          {projects?.slice(0, 4).map((project, index) => (
            <FadeIn key={project.slug || index} delay={index * 0.05}>
              <Link href={`/projects/${project.slug}`} className="group block space-y-4">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100 border border-line relative">
                  <Image
                    src={project.coverImage || "cover.png"}
                    alt={project.title}
                    fill
                    quality={88}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-sm font-medium tracking-wide text-neutral-900">
                      {project.title}
                    </h3>
                    <span className="text-xs font-light text-quiet tracking-wider">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs font-light text-quiet tracking-wide uppercase">
                    {project.type}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Left-Aligned Dynamic Grid Contact Block */}
        <div className="mt-24 max-w-full space-y-3 border-t border-line pt-8 text-xs tracking-[0.18em] text-neutral-800 font-light sm:max-w-max sm:tracking-[0.26em]">
          
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
              href="https://www.linkedin.com/in/er%C3%ABz-bekolli-0127482a1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block -my-3 break-words py-3 lowercase tracking-normal transition hover:text-quiet lg:my-0 lg:py-0"
            >
              www.linkedin.com/in/erëz-bekolli-0127482a1
            </a>
          </div>

        </div>

      </section>
    </main>
  );
}
