import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-sm text-gray-50 pr-2 w-full lg:w-[78%]">
      <div className="text-black pt-2">
      <div className=" mx-auto space-y-6">

        {/* SS Life Spaces Section */}
        <div className="bg-white p-10 shadow-sm mr-2">
          <h2 className="text-3xl font-semibold text-black mb-2">SS Life Spaces</h2>
          <p className="text-lg">
            SS Life Spaces is celebrating its 25th anniversary, a milestone marked by the happiness of over 2000 families who have made our lifespace their home.
            Our journey has been defined by a commitment to delivering affordable luxury through innovative residential complexes across Dombivli, Kalyan, and Thakurli.
            These projects have not just provided homes but have redefined lifestyles, offering top-tier wellness facilities and creating vibrant communities that resonate with modern living ideals.
          </p>
        
          <h3 className="font-semibold text-black mt-8">RERA Information</h3>
          <div className="flex items-center gap-4">
            <img
              src="/path-to-qr.png" // Replace with actual QR image path
              alt="QR Code"
              className="w-14 h-14 object-contain"
            />
            <p>
              <strong>Balaji Kanha MahaRERA - </strong>
              <span className="text-black font-semibold">P51700055656</span>
            </p>
          </div>
        </div>

        {/* About Bellamaison */}
        <div className="bg-white p-6 shadow-sm space-y-2 mr-2">
          <h3 className="text-lg font-semibold text-black">About Bellamaison Realty</h3>
          <p>
            Bellamaison Realty is a Marketing Consultant and channel partner based out of Mumbai.
          </p>
          <p>
            The group is working towards its goal to provide marketing and sales services to real estate developers. It is also working toward its goal to serve customers by providing them the best available support.
          </p>
          <p>
            <strong>Bellamaison Realty Rera:</strong> A031332400291
          </p>
        </div>

        {/* Disclaimer (unchanged) */}
        <div className="text-xs text-gray-500 mt-2">
          <p>
            <strong>Disclaimer:</strong> We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services.
            Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability.
            You can expect a call, SMS or emails on details registered with us.
          </p>
        </div>

        {/* Footer Bottom Links (unchanged) */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mt-2">
          <span>Copyright © 2024</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies Policy</a>
        </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
