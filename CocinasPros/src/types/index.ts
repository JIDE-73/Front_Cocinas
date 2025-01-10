export interface Project {
  id: string;
  title: string;
  description: string;
  style: "modern" | "minimalist" | "classic" | "contemporary";
  images: string[];
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
