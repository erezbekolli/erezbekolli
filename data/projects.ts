export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  type: string;
  area: string;
  description: string;
  concept: string;
  planDescription?: string;
  coverImage: string;
  heroImage: string;
  images: string[];
  drawings: string[];
  plans: string[];
  sections: string[];
  diagrams?: string[];
  technical: string[];
};

export const projects: Project[] = [
  {
    slug: "contextual-vertical-living",
    title: "Hybrid Building-Vertical Farm and Shopping Center",
    year: "2026 - Conceptual",
    location: "Drenas, Kosovo",
    type: "Commercial/ Agricultural",
    area: "28036m2",
    description:
      "This project reimagines the relationship between infrastructure and community sustenance by stacking vertical farming over a commercial podium. Featuring a double skin glass and metal facade designed for optimal shading and thermal control, the building integrates public ramps, a green market on the podium, and cascading vegetation to maximize ecology on a dense urban plot.",
    concept:
      "The concept develops from a compact vertical mass set over a public commercial podium. The diagrams show the tower becoming more dynamic through stepped podium levels, green balconies, accessible ramps, and a double-skin mesh facade that regulates light, heat, and the building's agricultural character.",
    planDescription:
      "The ground floor is organized as a public commercial base with market units, exhibition areas, storage, service spaces, and sanitary cores arranged around a clear internal spine. Upper plans shift toward production and public food programs: growing areas and restaurant spaces wrap a compact central core, while the perimeter remains open for daylight, views, and facade ventilation.",
    coverImage: "/images/vertical-living/cover.png",
    heroImage: "/images/vertical-living/hero.jpg",
    images: [
      "/images/vertical-living/v1.png",
      "/images/vertical-living/cover.png",
      "/images/vertical-living/v3.png",
      "/images/vertical-living/v2.png",
      "/images/vertical-living/v6.jpg"
    ],
    drawings: [
      "/images/vertical-living/koncepti.jpg",
      "/images/vertical-living/akso 1.png"
    ],
    plans: [
      "/images/vertical-living/perdhesa.jpg",
      "/images/vertical-living/katet1.png"
    ],
    sections: [
      "/images/vertical-living/prerjet.png",
      "/images/vertical-living/FASADAT.png"
    ],
    diagrams: [],
    technical: [
      "Typology: Mixed-Use / Commercial & Urban Agriculture",
      "Key Systems: Double-Skin Glass Facade, Metal Mesh Solar Shading, Structural Circulation Ramps",
      "Core Software: ArchiCAD, D5 Render, Photoshop"
    ]
  },
  {
    slug: "hotel-landscape-threshold",
    title: "4 Star Mountain Hotel",
    year: "2023 - Conceptual",
    location: "Peja, Kosovo",
    type: "Hospitality",
    area: "6740m2",
    description:
      "Deeply responsive to its alpine environment, this 4-star mountain hotel translates traditional mountain forms into soft, fluid geometries. The building's sweeping curvatures are intentionally engineered to frame and direct views toward the most scenic natural landscapes. Spanning a basement, ground floor, mezzanine, and three guest levels, the hotel accommodates 42 rooms across various configurations. The ground floor clearly divides programmatic zones, separating guest amenities like the restaurant, lounge, and ski room from dedicated staff service areas. By pairing expansive glass with natural timber, the design creates a warm, light filled sanctuary rooted in its local identity.",
    concept:
      "The building form begins with an X-shaped reference drawn from the kraca motif in traditional Albanian clothing. Through a sequence of softening, separation, and orientation, the mass becomes a curved hotel bar that opens rooms toward the strongest landscape views.",
    planDescription:
      "The ground floor separates public hospitality functions from back-of-house areas through a curved plan that follows the site geometry. Restaurant, lounge, bar, ski room, kitchen, and service spaces are organized around clear guest circulation, while the typical room floors use a linear corridor with compact room modules oriented outward toward views and terraces.",
    coverImage: "/images/hotel-threshold/coveri.png",
    heroImage: "/images/hotel-threshold/hero.jpg",
    images: [
      "/images/hotel-threshold/coveri.png",
      "/images/hotel-threshold/cover.png",
      "/images/hotel-threshold/v3.png",
      "/images/hotel-threshold/v5.png"
    ],
    drawings: ["/images/hotel-threshold/koncepti.jpg"],
    plans: [
      "/images/hotel-threshold/perdhesa.jpg",
      "/images/hotel-threshold/kati.png",
      "/images/hotel-threshold/dhomat.jpg"
    ],
    sections: [
      "/images/hotel-threshold/prerja.png",
      "/images/hotel-threshold/FASDAT.png"
    ],
    diagrams: [],
    technical: [
      "Typology: Hospitality / 4-Star Hotel",
      "Scale: Basement, Ground Floor, Mezzanine, + 3 Guest Levels (42 Rooms)",
      "Core Software: ArchiCAD, Lumion, Photoshop"
    ]
  },
  {
    slug: "urban-density-study",
    title: "Administration Building",
    year: "2024 - Conceptual",
    location: "Prishtina, Kosovo",
    type: "Commercial",
    area: "8866m2",
    description:
      "Located in Prishtina, this administrative building is designed around a high-efficiency layout that maximizes natural daylight from all sides. The architecture utilizes a centralized structural core to free up the surrounding floor plates, creating highly flexible, open-plan office environments. A standout feature of the design is its engineered double-skin glass facade, separated by an air cavity to drastically optimize thermal performance and reduce energy consumption. By incorporating integrated louvers for controlled shading, the building ensures perfect natural lighting conditions while prioritizing occupant well-being. Additionally, the ground floor features an open pilotis structure that opens up to the street layout, providing a multifunctional public space that weaves the building directly into the urban fabric.",
    concept:
      "The massing begins as a simple volume shaped by the plot, then separates around a central core to create a stronger spatial and visual identity. Green terraces are inserted into the office plates, turning the facade into a layered system of workspaces, outdoor extensions, and environmental buffering.",
    planDescription:
      "The plans use a central service and circulation core to free the surrounding floor plates for flexible public and office programs. The ground floor combines entrance, information, meeting, auditorium, and shared areas, while the work floors organize open offices, meeting rooms, management spaces, kitchens, and terraces around a clear structural grid.",
    coverImage: "/images/urban-study/cover.png",
    heroImage: "/images/urban-study/hero.jpg",
    images: [
      "/images/urban-study/cover.png",
      "/images/urban-study/viz.png"
    ],
    drawings: ["/images/urban-study/koncepti.png"],
    plans: [
      "/images/urban-study/perdhesa.jpg",
      "/images/urban-study/kati.png"
    ],
    sections: [
      "/images/urban-study/PRERJA A-A.png",
      "/images/urban-study/PRERJA B.jpg",
      "/images/urban-study/fasada.png",
      "/images/urban-study/fasada2.jpg"
    ],
    technical: [
      "Urban master-planning and spatial strategy blueprints",
      "Density analytics and zoning optimization modeling",
      "Diagrammatic sequencing and environmental mapping frameworks"
    ]
  },
  {
    slug: "heritage-adaptive-reuse",
    title: "Albanian Kulla Adaptive Reuse",
    year: "2026 - Conceptual",
    location: "Has, Kosovo",
    type: "Cultural Heritage",
    area: "234m2",
    description:
      "Located in the Has region, this traditional Albanian Kulla is reimagined as a workshop and exhibition space dedicated to preserving traditional Has clothing. The contemporary addition is clad in reflective materials that symbolize the lost and ruined portions of the original structure, creating a poetic dialogue between memory and preservation. A technical mesh facade filters natural light to optimize working conditions within the studio. All new interventions utilize secondary, minimalist materials to ensure the historic kulla remains the focal architectural and cultural centerpiece.",
    concept:
      "The intervention starts from the existing kulla and the presumed outline of its lost portions. New extensions reinterpret the kollan motif from traditional Has clothing, then rotate and adjust toward the road, using reflective material to mark absence while preserving the historic stone volume as the primary reference.",
    planDescription:
      "The plans distinguish the restored kulla from the new contemporary extension through material, geometry, and program. The ground floor holds reception, exhibition, sales, and support spaces connected by the surrounding stone path, while the upper level introduces workshop and work areas that allow the cultural program to operate without overwhelming the original structure.",
    coverImage: "/images/heritage-reuse/cover.png",
    heroImage: "/images/heritage-reuse/hero.jpg",
    images: [
      "/images/heritage-reuse/cover.png",
      "/images/heritage-reuse/v1.png",
      "/images/heritage-reuse/v2.png",
      "/images/heritage-reuse/v3.png",
      "/images/heritage-reuse/v4.png",
      "/images/heritage-reuse/v5.png"
    ],
    drawings: ["/images/heritage-reuse/koncepti.jpg"],
    plans: [
      "/images/heritage-reuse/perdhesa.jpg",
      "/images/heritage-reuse/KATI.jpg"
    ],
    sections: [
      "/images/heritage-reuse/PRERJET.jpg",
      "/images/heritage-reuse/FVERIORE.png",
      "/images/heritage-reuse/Flindore.png"
    ],
    technical: [
      "Typology: Cultural Hub and Community Craft Center",
      "Materials: Stone, Wood, Steel, Reflective Glass, Reflective Metal, Metal Mesh",
      "Core Software: ArchiCAD, D5 Render, Photoshop"
    ]
  },
  {
    slug: "minimalist-pavilions",
    title: "Minimalist Pavilions",
    year: "2026",
    location: "Park Landscape",
    type: "Cultural / Pavilion",
    area: "234m2",
    description:
      "A sequence of lightweight structural pavilions focused on tectonic honesty, material circularity, and light interaction.",
    concept:
      "Redefining modular structures through clear connections, raw timber joinery, and an open floor-plan configuration built for dynamic public use.",
    coverImage: "/images/hotel-threshold/cover.jpg",
    heroImage: "/images/hotel-threshold/hero.jpg",
    images: [
      "/images/hotel-threshold/hero.jpg",
      "/images/hotel-threshold/cover.jpg"
    ],
    drawings: [
      "/images/hotel-threshold/hero.jpg",
      "/images/hotel-threshold/cover.jpg"
    ],
    plans: [
      "/images/hotel-threshold/hero.jpg",
      "/images/hotel-threshold/cover.jpg"
    ],
    sections: [
      "/images/hotel-threshold/hero.jpg",
      "/images/hotel-threshold/cover.jpg"
    ],
    diagrams: [
      "/images/hotel-threshold/hero.jpg",
      "/images/hotel-threshold/cover.jpg"
    ],
    technical: [
      "Tectonic joinery prototyping and detail draftings",
      "Structural engineering logic and material optimization",
      "Light and shadows projection study simulations"
    ]
  },
  {
    slug: "spatial-topographies",
    title: "Spatial Topographies",
    year: "2025",
    location: "Coastal Context",
    type: "Experimental / Exhibition",
    area: "100m2",
    description:
      "An exhibition installation exploring the relationship between digital terrain modeling and tactile material cast formations.",
    concept:
      "Translating architectural topography data lines into concrete and acoustic panel reliefs, designing an immersive walkthrough spatial experience.",
    coverImage: "/images/heritage-reuse/cover.jpg",
    heroImage: "/images/heritage-reuse/hero.jpg",
    images: [
      "/images/heritage-reuse/hero.jpg",
      "/images/heritage-reuse/cover.jpg"
    ],
    drawings: [
      "/images/heritage-reuse/hero.jpg",
      "/images/heritage-reuse/cover.jpg"
    ],
    plans: [
      "/images/heritage-reuse/hero.jpg",
      "/images/heritage-reuse/cover.jpg"
    ],
    sections: [
      "/images/heritage-reuse/hero.jpg",
      "/images/heritage-reuse/cover.jpg"
    ],
    diagrams: [
      "/images/heritage-reuse/hero.jpg",
      "/images/heritage-reuse/cover.jpg"
    ],
    technical: [
      "Digital landscape modeling and analytical topographic rendering",
      "Material casting tests, spatial installation curation, and acoustic paneling details",
      "Exhibition circulation planning and lighting design configuration"
    ]
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
