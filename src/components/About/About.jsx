import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-6 text-center min-h-screen max-w-7xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8">ABOUT COMPANY</h1>

      {/* Content Container */}
      <div className="bg-white p-8 rounded-lg shadow-xl text-left">
        {/* Company Description */}
        <p className="text-gray-700 text-lg mb-6">
          R.S. Industries is a leading manufacturer and trading company specializing in machinery parts, turning components, and job works. With a commitment to quality and precision, we serve a diverse range of industries.
        </p>

        {/* Highlighted Quote */}
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 text-lg mb-6">
          “The best quality comes from rigorous quality checks and international standards.”
        </blockquote>

        {/* Additional Details */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Locations</h2>
          <div className="space-y-2">
            <p className="text-gray-600"><strong>Office Address:</strong> Plot No. 21, Prem Enclave, Meerut Road, Ghaziabad</p>
            <p className="text-gray-600"><strong>Factory Address:</strong> Khasra No. 1087, Vikes Nagar, Opposite D.P.S., Near Kailash Hospital, Opposite Ultam Toyota, Meerut Road, Ghaziabad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;