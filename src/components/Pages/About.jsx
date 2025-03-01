import Banner from '@/Banner/Banner';
import React from 'react';


const AboutUs = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner title="About Us" breadcrumb="About" />

      {/* About Content Section */}
      <div className="p-6 text-center min-h-screen max-w-7xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
        <div className="mt-8 text-left bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            R.S. Industries is a leading manufacturer and trading company specializing in machinery parts, turning components, and job works. With a commitment to quality and precision, we serve a diverse range of industries.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Locations</h2>
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