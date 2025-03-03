import React from 'react';
// import sanohaImage from '../assets/sanoha-image.png'; 

const AboutRs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white  rounded-lg mt-10 flex items-center">
      <div className="w-2/3 pr-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About R.S Industries</h1>
        <p className="text-gray-600 mb-4">
        R.S. Industries is a leading manufacturer and trading company specializing in machinery parts, turning components, and job works. With a commitment to quality and precision, we cater to a diverse range of industries, ensuring reliable and efficient solutions. Our state-of-the-art infrastructure, skilled workforce, and customer-centric approach enable us to deliver high-performance products that meet industry standards. Driven by innovation and excellence, we continuously strive to exceed client expectations and build long-term partnerships.
        </p>
        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Read More..
        </button> */}
      </div>
      <div className="w-1/3">
        <img src="https://sanohabd.com/wp-content/uploads/2021/09/5f08b4148acee579e1ccbcc6_Automation-Images_resized-1024x446-1.jpg" alt="SANOHA International" className="rounded-lg" />
      </div>
    </div>
  );
};

export default AboutRs;