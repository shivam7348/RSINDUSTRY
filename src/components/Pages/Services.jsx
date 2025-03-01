import { services } from '@/utils/constants';
import React, { useState } from 'react';
 // Assuming you have a services data file

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service.id === selectedService ? null : service.id);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      
      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Left Side - Services Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 flex flex-col relative group cursor-pointer
                ${selectedService === service.id ? 'ring-2 ring-blue-500 scale-105 z-10' : 'hover:shadow-xl'}`}
              onClick={() => handleServiceClick(service)}
            >
              <div className="relative h-48 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{service.shortDescription}</p>
              </div>
              
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-white mb-4">{service.description}</p>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`More info about ${service.name}`);
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right Side - Service Details (visible when item is selected) */}
        <div className="bg-gray-50 rounded-lg p-6 shadow-md">
          {selectedService ? (
            (() => {
              const service = services.find(s => s.id === selectedService);
              return (
                <div>
                  <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
                  <div className="mb-4">
                    <img 
                      src={service.image} 
                      alt={service.name} 
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Service Details</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features?.map((feature, index) => (
                        <div key={index} className="bg-white p-3 rounded shadow-sm">
                          <span className="font-medium text-gray-700">{feature.name}:</span> {feature.value}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full mt-4">
                    Request Service
                  </button>
                </div>
              );
            })()
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Select a Service</h2>
              <p className="text-gray-600">Click on any service to see detailed information</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Call-to-Action Section */}
      <div className="mt-12 text-center bg-gray-100 py-8 px-4 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold mb-4">Interested in Our Services?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Contact us today to get a quote or learn more about our service offerings.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;