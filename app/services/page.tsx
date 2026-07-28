import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Services | Architectural Design, Visualization & BIM",
  description:
    "Architectural design, visualization, BIM documentation, competition support, branding, digital presence, and heritage research services by Erëz Bekolli.",
  openGraph: {
    title: "Services | Erëz Bekolli Architecture Portfolio",
    description:
      "Architectural design, visualization, BIM documentation, competition support, branding, and heritage research services.",
    images: ["/images/hero-monograph.jpg"]
  }
};

const services = [
  {
    title: "Architectural Design",
    description:
      "Concept-driven architectural design for residential, commercial, and interior projects, guiding ideas from initial concepts through presentation-ready proposals. Every project is approached with a balance of creativity, functionality, and attention to detail."
  },
  {
    title: "Architectural Visualization",
    description:
      "High-quality 3D visualizations that bring architectural concepts to life through realistic exterior and interior renders, helping clients and design teams clearly communicate ideas before construction begins."
  },
  {
    title: "BIM & Technical Documentation",
    description:
      "Comprehensive BIM modeling and technical documentation, including floor plans, sections, elevations, construction drawings, and detailed architectural documentation that supports every stage of the design process."
  },
  {
    title: "Competition & Design Support",
    description:
      "Professional assistance for architectural competitions and design presentations, including concept development, architectural diagrams, presentation boards, graphic layouts, and visual storytelling."
  },
  {
    title: "Branding & Digital Presence",
    description:
      "Creative digital solutions that help architects, designers, and businesses establish a strong professional identity through portfolio websites, branding, logo design, mockups, and presentation materials."
  },
  {
    title: "Heritage & Research",
    description:
      "Research-driven documentation and architectural analysis with a focus on heritage conservation, historical buildings, and the preservation of architectural identity."
  }
];

const software = [
  "ArchiCAD",
  "AutoCAD",
  "Revit",
  "D5 Render",
  "Lumion",
  "Twinmotion",
  "Enscape",
  "SketchUp",
  "Adobe Photoshop",
  "Adobe InDesign"
];

export default function ServicesPage() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Architectural Design and Visualization Services",
    provider: {
      "@type": "Person",
      name: "Erëz Bekolli",
      jobTitle: "Architect"
    },
    serviceType: services.map((service) => service.title),
    areaServed: "International",
    description:
      "Architectural design, visualization, BIM documentation, competition support, branding, digital presence, and heritage research services."
  };

  return (
    <main className="px-5 pb-10 pt-28 sm:px-8 lg:px-12 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      <section className="border-t border-line pt-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h1 className="text-xs uppercase tracking-[0.32em] text-neutral-800 font-medium">
                Services
              </h1>
            </div>

            <div className="max-w-3xl space-y-8 text-base font-light leading-relaxed text-neutral-600 lg:col-span-8">
              <p>
                I offer architectural design, visualization, and digital design services tailored to architects, developers, businesses, and private clients. My work combines technical precision with strong visual communication to deliver solutions that are both functional and impactful.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="py-16 lg:py-20">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.32em] text-neutral-500">
              Architectural Services
            </h2>
          </FadeIn>

          <div className="space-y-8 lg:col-span-8 lg:col-start-5">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.04}>
                <article className="border-b border-line pb-8">
                  <h3 className="mb-3 text-sm font-medium tracking-wide text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="max-w-3xl text-base font-light leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.32em] text-neutral-500">
              Software
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-8 lg:col-start-5">
            <ul className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line text-xs uppercase tracking-[0.18em] text-neutral-700 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {software.map((item) => (
                <li key={item} className="min-w-0 break-words bg-paper px-4 py-4 leading-5">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <FadeIn>
          <div className="max-w-full space-y-3 border-t border-line pt-8 text-xs tracking-[0.18em] text-neutral-800 font-light sm:max-w-max sm:tracking-[0.26em]">
            <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline sm:grid-cols-[6.5rem_1fr]">
              <span className="text-neutral-400 uppercase font-normal">Contact:</span>
              <a
                href="mailto:erezbekolli@gmail.com"
                className="inline-block -my-3 break-words py-3 lowercase tracking-normal transition hover:text-quiet lg:my-0 lg:py-0"
              >
                erezbekolli@gmail.com
              </a>
            </div>

            <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline sm:grid-cols-[6.5rem_1fr]">
              <span className="text-neutral-400 uppercase font-normal">Phone:</span>
              <span className="tracking-[0.15em] text-neutral-600">
                +383 49 469 507
              </span>
            </div>

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
        </FadeIn>
      </section>
    </main>
  );
}
