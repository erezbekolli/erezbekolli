import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { ImageSection } from "@/components/image-section";
import { ProjectVisitTracker } from "@/components/project-visit-tracker";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Architecture Project`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} | Erëz Bekolli Architecture Portfolio`,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.heroImage,
          alt: `${project.title} architectural project by Erëz Bekolli`
        }
      ]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `https://erez-bekolli.vercel.app/projects/${project.slug}`,
    image: `https://erez-bekolli.vercel.app${project.heroImage}`,
    description: project.description,
    creator: {
      "@type": "Person",
      name: "Erëz Bekolli",
      jobTitle: "Architect"
    },
    about: [
      project.type,
      "Architectural design",
      "Architectural visualization",
      "Architecture research"
    ],
    spatialCoverage: project.location,
    dateCreated: project.year
  };

  return (
    <main>
      <ProjectVisitTracker slug={project.slug} title={project.title} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }}
      />
      <section className="min-h-screen px-5 pb-12 pt-24 sm:px-8 lg:px-12">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 gap-8 border-t border-line pt-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <Link href="/#projects" className="mb-8 inline-flex min-h-11 items-center text-xs uppercase tracking-[0.28em] text-neutral-500 hover:text-neutral-800 transition-colors sm:mb-10 lg:min-h-0">Projects</Link>
            <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">{project.title}</h1>
          </FadeIn>
          <FadeIn delay={0.12} className="relative min-h-[50vh] sm:min-h-[70vh] lg:min-h-[80vh] lg:col-span-6 lg:col-start-7">
            <Image
              src={project.heroImage}
              alt={`${project.title} architectural visualization by Erëz Bekolli`}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={100}
              unoptimized
              className="object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-12">
          <FadeIn className="lg:col-span-3">
            <dl className="space-y-5 text-sm">
              <div><dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">Year</dt><dd className="text-neutral-700">{project.year}</dd></div>
              <div><dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">Type</dt><dd className="text-neutral-700">{project.type}</dd></div>
              <div><dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">Location</dt><dd className="text-neutral-700">{project.location}</dd></div>
              <div><dt className="mb-1 text-xs uppercase tracking-[0.24em] text-neutral-500">Area</dt><dd className="text-neutral-700">{project.area}</dd></div>
            </dl>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7 lg:col-start-5 pt-1">
            <p className="max-w-3xl text-lg leading-8 text-neutral-700">{project.description}</p>
          </FadeIn>
        </div>
      </section>

      <ImageSection 
        title="Concept and Diagrams" 
        images={project.drawings} 
        description={project.concept} 
        transparent={true} 
        altBase={project.title}
      />
      
      <ImageSection 
        title="Plans" 
        images={project.plans} 
        bottomDescription={project.planDescription}
        bordered 
        altBase={project.title}
      />
      <ImageSection title="Sections & Elevations" images={project.sections} bordered altBase={project.title} />
      <ImageSection title="Elevations" images={project.diagrams ?? []} bordered altBase={project.title} />
      <ImageSection title="Visualizations" images={project.images} altBase={project.title} />

      <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-12">
          <h2 className="text-xs uppercase tracking-[0.32em] text-neutral-500 lg:col-span-3">Technical Information</h2>
          <ul className="space-y-4 text-lg leading-8 lg:col-span-7 text-neutral-700">
            {project.technical.map((item) => <li key={item} className="border-b border-line pb-4">{item}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
