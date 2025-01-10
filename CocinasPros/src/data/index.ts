import { Project, Service, Testimonial } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Cocina Moderna Vista al Mar",
    description:
      "Diseño contemporáneo con acabados en blanco y madera, perfectamente integrado con vista panorámica.",
    style: "modern",
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80",
    ],
    features: [
      "Isla central",
      "Acabados mate",
      "Iluminación LED",
      "Almacenamiento inteligente",
    ],
  },
  {
    id: "2",
    title: "Cocina Minimalista Urbana",
    description:
      "Espacio optimizado con líneas limpias y almacenamiento oculto para un ambiente despejado.",
    style: "minimalist",
    images: [
      "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80",
    ],
    features: [
      "Diseño minimalista",
      "Electrodomésticos integrados",
      "Superficies sin tiradores",
    ],
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Diseño Personalizado",
    description:
      "Creamos espacios únicos que reflejan tu estilo de vida y necesidades específicas.",
    icon: "pencil-ruler",
  },
  {
    id: "2",
    title: "Fabricación",
    description:
      "Utilizamos materiales de primera calidad y técnicas avanzadas de fabricación.",
    icon: "tool",
  },
  {
    id: "3",
    title: "Instalación Profesional",
    description:
      "Nuestro equipo experto garantiza una instalación perfecta y puntual.",
    icon: "hammer",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ana García",
    role: "Propietaria",
    content:
      "El proceso de diseño fue increíble. Capturaron exactamente lo que queríamos y el resultado superó nuestras expectativas.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    role: "Arquitecto",
    content:
      "Como profesional del diseño, aprecio la atención al detalle y la calidad de su trabajo. Altamente recomendable.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
];
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
