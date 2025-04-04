import React, { useState, useEffect } from 'react';
import { FaHome, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Default active section

  // Toggle menu visibility
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to scroll to a particular section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver callback to detect when sections come into view
  const observeSections = () => {
    const sections = ['hero', 'price', 'site', 'amenities', 'gallery', 'location'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section based on visibility
          }
        });
      },
      { threshold: 0.5 } // When 50% of the section is visible
    );

    // Start observing all sections
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect(); // Cleanup observer on unmount
    };
  };

  useEffect(() => {
    const cleanupObserver = observeSections();
    return cleanupObserver; // Cleanup observer on component unmount
  }, []);

  return (
    <div className="w-full lg:w-[78%] fixed top-0 left-0 z-50">
      <div className="h-16 flex flex-wrap md:flex-nowrap bg-white shadow-md">
        {/* Logo Section */}
        <div className="w-full md:w-1/6 bg-white flex justify-center items-center border-r">
          <span>
            <img src="" alt="" />
          </span>
          <span className="text-2xl font-extralight text-gray-300 mx-2">|</span>
          <span>
            <img src="" alt="" />
          </span>

          {/* Toggle Button (Hamburger or Cross) for mobile */}
          <div className="md:hidden flex justify-end w-full py-4 px-4">
            <button
              onClick={toggleMenu}
              className="text-2xl border-1 px-3 py-2 rounded-md text-gray-700 border-gray-200"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Main Navigation Items */}
        <div
          className={`w-full md:w-[5/6] flex md:flex-nowrap flex-wrap md:justify-center transition-all duration-500 ease-in-out ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          {/* Navigation Items */}
          <div
            onClick={() => scrollToSection('hero')}
            className={`w-full md:w-[11%] px-4 py-2 border-gray-200 flex justify-center items-center border-r cursor-pointer ${
              activeSection === 'hero' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            <span className="text-lg md:text-2xl">
              <FaHome />
            </span>
          </div>
          <div
            onClick={() => scrollToSection('price')}
            className={`w-full md:w-[15%] px-4 py-2 border-gray-200 flex justify-center items-center border-r cursor-pointer ${
              activeSection === 'price' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            <span className="text-lg md:text-2xl">
              <FaHome />
            </span>
            <p className="px-1 text-xs md:text-md">Price</p>
          </div>

          <div
            onClick={() => scrollToSection('site')}
            className={`w-full md:w-[24%] px-4 py-2 border-gray-200 flex justify-center items-center border-r cursor-pointer ${
              activeSection === 'site' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            <span className="text-lg md:text-2xl">
              <FaHome />
            </span>
            <p className="px-1 text-xs md:text-md">Site & Floor Plan</p>
          </div>

          <div
            onClick={() => scrollToSection('amenities')}
            className={`w-full md:w-[20%] px-4 py-2 border-gray-200 flex justify-center items-center border-r cursor-pointer ${
              activeSection === 'amenities' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            <span className="text-lg md:text-2xl">
              <FaHome />
            </span>
            <p className="px-1 text-xs md:text-md">Amenities</p>
          </div>

          <div
            onClick={() => scrollToSection('gallery')}
            className={`w-full md:w-[18%] px-4 py-2 border-gray-200 flex justify-center items-center border-r cursor-pointer ${
              activeSection === 'gallery' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            <span className="text-lg md:text-2xl">
              <FaHome />
            </span>
            <p className="px-1 text-xs md:text-md">Gallery</p>
          </div>

          <div
            onClick={() => scrollToSection('location')}
            className={`w-full md:w-[20%] px-4 py-2 border-gray-200 flex justify-center items-center border-r cursor-pointer ${
              activeSection === 'location' ? 'bg-black text-white' : 'bg-white text-gray-700'
            }`}
          >
            <span className="text-lg md:text-2xl">
              <FaHome />
            </span>
            <p className="px-1 text-xs md:text-md">Location</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
