import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, services } from "../data";

const heroImages = [
  "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative h-screen">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Diseñamos cocinas que inspiran tu hogar
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in-delay">
                Transformamos espacios en experiencias únicas, donde la
                funcionalidad se encuentra con el diseño.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
              >
                Comienza tu proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            Proyectos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              Ver todos los proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?auto=format&fit=crop&q=80"
                alt="Nuestro equipo"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Nuestra Filosofía</h2>
              <p className="text-xl text-gray-600 mb-8">
                Creemos en la perfecta armonía entre diseño y funcionalidad.
                Cada cocina que creamos es un reflejo de la personalidad de
                nuestros clientes, construida con los más altos estándares de
                calidad y atención al detalle.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
export default Home;
