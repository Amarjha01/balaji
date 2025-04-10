import React, { useState } from 'react';
import { HiCurrencyRupee } from 'react-icons/hi';
import './DownloadBrochureButton.css';
import HeroForm from './PriceForm';

const pricingData = [
  { type: '1 BHK', area: '422 Sq.Ft', price: '₹ 48 Lacs Onwards' },
  { type: '2 BHK', area: '612 Sq.Ft', price: '₹ 68 Lacs Onwards' },
];

const Price = () => {
  const [showForm, setShowForm] = useState(false);
  const [formKey, setFormKey] = useState(0);  // State to force re-mount of HeroForm

  const handleFormOpen = () => {
    setShowForm(true);
    setFormKey((prevKey) => prevKey + 1); // Change the key to force re-mount
  };

  return (
    <section id="price" className="pt-3 md:pr-4 bg-gray-50 w-full lg:w-[78%]">
      <div className="bg-white p-6 md:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Price</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mobile View */}
          <div className="md:hidden space-y-6">
            {pricingData.map((item, index) => (
              <div
                key={index}
                className="bg-white w-full text-center border-t border-gray-300 py-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{item.type}</h3>
                <p className="text-gray-500 text-sm">{item.area}</p>
                <p className="text-lg font-semibold text-gray-800 mt-2">{item.price}</p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-black text-white rounded">
                  Price Breakup
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="w-full lg:w-2/3 hidden md:block">
            <table className="w-full border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="p-2 border">Type</th>
                  <th className="p-2 border">Area</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className="p-4 border">{item.type}</td>
                    <td className="p-4 border">{item.area}</td>
                    <td className="p-4 border">{item.price}</td>
                    <td className="p-4 border text-center">
                      <button
                        className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-black to-green-600 cursor-pointer rounded-md shadow-lg overflow-hidden"
                        onClick={handleFormOpen} // Open form with a fresh key
                      >
                        <HiCurrencyRupee className="bounce-icon w-5 h-5 z-10" />
                        <span className="z-10">Price Breakup</span>
                        <span className="metallic-shine" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Costing Image + Enquiry Button */}
          <div className="w-full lg:w-1/3 text-center space-y-4">
            <div className="relative w-full group overflow-hidden">
              <img
                src="/src/assets/costing.webp"
                alt="Costing Details"
                className="w-full h-auto border cursor-pointer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black opacity-50 h-0 group-hover:h-full transition-all duration-500 ease-in-out"></div>
              <button
                className="absolute inset-x-0 top-[-100%] text-white bg-black/75 text-lg w-[70%] ml-[15%] px-3 py-2 cursor-pointer group-hover:top-[40%] transition-all duration-700 ease-in-out"
                onClick={handleFormOpen} // Open form with a fresh key
              >
                Enquire Now
              </button>
            </div>

            <button
              className="relative w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-black to-green-600 rounded-md shadow-lg overflow-hidden"
              onClick={handleFormOpen} // Open form with a fresh key
            >
              <span className="relative z-10">Complete Costing Details</span>
              <span className="metallic-shine" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && <HeroForm key={formKey} showForm={showForm} setShowForm={setShowForm} />}
    </section>
  );
};

export default Price;
