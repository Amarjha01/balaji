import React, { useState, useEffect } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const observeSections = () => {
    const sections = ['hero', 'price', 'site', 'amenities', 'gallery', 'location'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  };

  useEffect(() => {
    const cleanupObserver = observeSections();
    return cleanupObserver;
  }, []);

  return (
    <div className="w-full lg:w-[78%] fixed top-0 left-0 z-50">
      <div className="h-auto flex flex-wrap md:flex-nowrap  bg-white shadow-md">

        {/* Logo Section */}
        <div className="w-full md:w-1/6 bg-white items-center border-r border-gray-300 flex md:flex-col md:flex-row md:items-center md:justify-center relative">
          {/* Logo 1 - Only on Desktop */}
          <span className=" md:block">
            <img src="/src/assets/logo1.jpg" alt="Logo1" className="w-[100px]" />
          </span>

          {/* Divider - Only on Desktop */}
          <span className="hidden md:block text-2xl font-extralight text-gray-300 mx-2">|</span>

          {/* Centered Logo for Mobile */}
          <div className="flex md:hidden w-full ml-[17%] md:py-2">
            <img
              src="/src/assets/logo.jpeg"
              alt="Logo"
              className="object-contain h-16 w-auto"
            />
          </div>

          {/* Logo 2 - Only on Desktop */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src="/src/assets/logo.jpeg"
              alt="Logo"
              className="object-contain h-20 w-auto"
            />
          </div>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden absolute top-4 right-4">
            <button
              onClick={toggleMenu}
              className="text-2xl border px-3 py-2 rounded-md text-gray-700 border-gray-200"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div
          className={`w-full md:w-[5/6] flex md:flex-nowrap flex-wrap md:justify-center transition-all duration-500 ease-in-out ${menuOpen ? 'block' : 'hidden md:flex'}`}
        >
          {[
            { id: 'hero', label: '', icon: <FaHome /> },
            { id: 'price', label: 'Price', icon: <FaHome /> },
            { id: 'site', label: 'Site & Floor Plan', icon: <FaHome /> },
            { id: 'amenities', label: 'Amenities', icon: <FaHome /> },
            { id: 'gallery', label: 'Gallery', icon: <FaHome /> },
            { id: 'location', label: 'Location', icon: <FaHome /> },
          ].map((item, index) => (
            <div
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full md:w-[${item.label === '' ? '11%' : item.label === 'Site & Floor Plan' ? '24%' : item.label === 'Price' ? '15%' : '18%'}] px-4 py-2 border-gray-200 flex justify-center items-center border-r cursor-pointer ${activeSection === item.id ? 'bg-black text-white' : 'bg-white text-gray-700'}`}
            >
              <span className="text-lg md:text-2xl">{item.icon}</span>
              {item.label && (
                <p className="px-1 text-xs md:text-md">{item.label}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
