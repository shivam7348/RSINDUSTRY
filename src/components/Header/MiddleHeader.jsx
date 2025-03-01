import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../Footer/logo.png";

const MiddleHeader = () => {
  return (
    <div className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left px-4 lg:px-8">
        
        {/* Logo & Address Section */}
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <img src={logo} alt="Company Logo" className="h-12 w-auto"/>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-red-600 text-xl" />
            <div className="flex flex-col">
              <p className="text-gray-600"> Ghaziabad Add:- Plot No.21, Prem Enclave, </p>
              <p className="text-gray-600">Opp, D.P.S, Near Kailash Hospital, Meerut Road, (U.P.) INDIA</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-4 lg:mt-0 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-green-600 text-xl" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-gray-600 font-medium">Get in Touch</p>
              <p className="text-gray-800 font-semibold">
                +9440406200, +9849059508
              </p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-blue-600 text-xl" />
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-gray-600 font-medium">E-mail Us</p>
              <p className="text-gray-800 font-semibold">info@example.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MiddleHeader;