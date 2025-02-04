import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import Logo from '@/assets/logo-porton-dorado.png'; // Cambia por el logo de tu marca
import testimonio1 from '@/assets/testimonio1.jpg';
import testimonio2 from '@/assets/testimonio2.jpg';
import testimonio3 from '@/assets/testimonio3.jpg';
import cafe1 from '@/assets/cafe1.jpg'; // Imágenes de tu café
import cafe2 from '@/assets/cafe2.jpg';
import cafe3 from '@/assets/cafe3.jpg';
import finca from '@/assets/finca.jpg'; // Imagen de la finca El Recuerdo
import aliado1 from '@/assets/aliado1.png';
import aliado2 from '@/assets/aliado2.png';
import aliado3 from '@/assets/aliado3.png';
import aliado4 from '@/assets/aliado4.png';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const beneficios = [
    {
      icon: "☕",
      title: "Café de Origen",
      desc: "Cultivado en las montañas de Risaralda y Caldas, Colombia.",
    },
    {
      icon: "🍫",
      title: "Notas Achocolatadas",
      desc: "Disfruta de un café con sabores intensos y aromas únicos.",
    },
    {
      icon: "🌱",
      title: "Sostenible",
      desc: "Producido con prácticas agrícolas responsables y respetuosas con el medio ambiente.",
    },
  ];

  const testimonios = [
    { text: 'El café de Portón Dorado es simplemente excepcional. Las notas achocolatadas son increíbles.', name: 'Isabela Gómez', photo: testimonio1 },
    { text: 'Nunca había probado un café tan especial. Se nota que es de origen y cultivado con pasión.', name: 'Leonardo Martinez', photo: testimonio2 },
    { text: 'Cada taza es un viaje a las montañas de Colombia. ¡Increíble!', name: 'Blanca Velasquez', photo: testimonio3 }
  ];

  const aliados = [aliado1, aliado2, aliado3, aliado4];

  const variedadesCafe = [
    { image: cafe1, title: 'Café Risaralda', desc: 'Notas de chocolate oscuro y frutos rojos.' },
    { image: cafe2, title: 'Café Caldas', desc: 'Aromas a caramelo y nueces.' },
    { image: cafe3, title: 'Café Especial', desc: 'Mezcla exclusiva con notas achocolatadas y cítricas.' },
  ];

  // Lógica de auto-play para pantallas móviles
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const interval = isMobile ? setInterval(() => nextSlide(), 5000) : null;
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beneficios.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beneficios.length) % beneficios.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-black text-white shadow-md h-12 flex items-end justify-between px-4">
        {/* Contact Information */}
        <div className="flex items-center space-x-6 ml-auto">
          <span className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-1" /> +57 3204997492
          </span>
          <span className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-1" /> Risaralda y Caldas, Colombia
          </span>

          {/* Instagram Logo */}
          <a
            href="https://instagram.com/portondorado"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </header>

      <header className="bg-white shadow-md h-16 flex items-center px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Portón Dorado" className="h-12" />
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto lg:hidden block text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menú de navegación */}
        <nav
          className={`lg:flex gap-4 ml-auto ${isMenuOpen ? "block" : "hidden"
            } absolute lg:static top-16 right-4 bg-white shadow-lg rounded-md lg:shadow-none lg:bg-transparent p-4 lg:p-0`}
          style={{ width: "max-content" }}
        >
          {[
            "Nuestro Café",
            "Origen",
            "Variedades",
            "Sostenibilidad",
            "Contacto",
          ].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-sm font-bold hover:text-gold-500 block lg:inline-block mb-2 lg:mb-0"
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="w-full h-full py-60 text-white text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${finca})`,
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Portón Dorado</h1>
          <p className="text-lg mb-6">Café colombiano de origen, con notas achocolatadas, cultivado en la finca El Recuerdo.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gold-500 text-black font-bold rounded-full">
              Comprar ahora
            </Button>
            <Button size="lg" className="bg-green-600 text-white font-bold rounded-full">
              Conoce más
            </Button>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gold-500 mb-8">
            ¿Por qué elegir Portón Dorado?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {beneficios.map((beneficio, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-gold-500 text-black text-4xl p-4 rounded-full">
                  {beneficio.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold">{beneficio.title}</h3>
                <p className="text-gray-300">{beneficio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Variedades de Café */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gold-500 mb-8">
            Nuestras Variedades
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {variedadesCafe.map((cafe, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
                <img
                  src={cafe.image}
                  alt={cafe.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold text-gold-500">{cafe.title}</h3>
                <p className="text-gray-300">{cafe.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gold-500 mb-8">
            Testimonios
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center p-8">
            {testimonios.map((testimonial, index) => (
              <div key={index} className="bg-green-900 shadow-lg rounded-lg p-6">
                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full">
                  <img
                    src={testimonial.photo}
                    alt={`Testimonio de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 italic text-gray-300">"{testimonial.text}"</p>
                <p className="mt-4 font-bold text-gold-500">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Aliados */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gold-500 mb-8">
            Nuestros Aliados
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aliados.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-black shadow-md rounded-lg p-6 min-h-[200px]"
              >
                <img
                  src={logo}
                  alt={`Aliado ${index + 1}`}
                  className="h-30 w-auto mb-4"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto flex justify-between">
          <p className="text-sm">&copy; 2025 Portón Dorado. Todos los derechos reservados.</p>
          <nav className="flex gap-4">
            <Link to="#" className="hover:underline">Términos</Link>
            <Link to="#" className="hover:underline">Privacidad</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}