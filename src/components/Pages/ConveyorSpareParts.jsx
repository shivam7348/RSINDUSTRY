import React from 'react';
import { ArrowRight } from 'lucide-react';
import Banner from '@/Banner/Banner';

const ConveyorSpareParts = () => {
  const bannerImage = 'https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

  // Sample data for conveyor spare parts with proper royalty-free images
  const spareParts = [
    {
      id: 1,
      name: "Conveyor Belt",
      description: "Heavy-duty rubber conveyor belts designed for industrial applications. Available in various widths and thicknesses to suit different load requirements.",
      features: ["Oil-resistant", "Heat-resistant up to 180°C", "Anti-static properties", "Cut-resistant edges"],
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    },
    {
      id: 2,
      name: "Roller Assembly",
      description: "Precision-engineered roller assemblies that ensure smooth material flow with minimal friction. Compatible with standard conveyor systems.",
      features: ["Sealed bearings", "Self-aligning design", "Corrosion-resistant coating", "Easy maintenance"],
      image: "https://images.pexels.com/photos/1625689/pexels-photo-1625689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Drive Pulley",
      description: "High-torque drive pulleys constructed from aerospace-grade aluminum. Provides reliable power transmission for conveyor systems.",
      features: ["Balanced for vibration-free operation", "Lagged surface for improved grip", "Various diameter options", "Custom shaft configurations"],
      image: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 4,
      name: "Motorized Drum",
      description: "Compact motorized drums with integrated gearbox and motor. The perfect solution for space-constrained conveyor applications.",
      features: ["IP66 protection", "Low noise operation", "Variable speed control", "Energy efficient design"],
      image: "https://images.pexels.com/photos/159298/gears-cogs-machines-industrial-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <>
      <Banner title="Conveyor Spare Parts" breadcrumb="About" image={bannerImage} />

      <div className="bg-gray-50 min-h-screen">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Premium Conveyor Components</h2>
            <p className="text-gray-700">
              Our comprehensive range of conveyor spare parts is designed to keep your material handling 
              systems running at peak efficiency. All components are manufactured to the highest 
              standards, ensuring durability and compatibility with major conveyor brands.
            </p>
          </section>

          {/* Product Listings */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {spareParts.map(part => (
              <div key={part.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={part.image} 
                  alt={part.name} 
                  className="w-full h-64 object-cover object-center"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{part.name}</h3>
                  <p className="text-gray-600 mb-4">{part.description}</p>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                  <ul className="list-disc pl-5 mb-4">
                    {part.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                  <button className="mt-2 flex items-center font-medium text-blue-600 hover:text-blue-800">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* Call to Action */}
          <section className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">Need Custom Parts?</h2>
            <p className="mb-4">
              Can't find what you're looking for? We offer custom manufacturing services for 
              specialized conveyor components tailored to your specific requirements.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300">
              Request a Quote
            </button>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-300">1-800-CONVEYOR</p>
                <p className="text-gray-300">sales@conveyorparts.example.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="text-gray-300">
                  <li className="mb-1"><a href="#" className="hover:text-blue-300">Catalog</a></li>
                  <li className="mb-1"><a href="#" className="hover:text-blue-300">Technical Support</a></li>
                  <li className="mb-1"><a href="#" className="hover:text-blue-300">About Us</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700 text-gray-400 text-sm">
              © {new Date().getFullYear()} Conveyor Spare Parts. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ConveyorSpareParts;