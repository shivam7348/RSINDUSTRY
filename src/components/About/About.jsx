import React from 'react';
import Banner from '@/Banner/Banner';
import { Factory, MapPin, Users, Award, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  const bannerImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

  const features = [
    {
      icon: <Factory className="w-8 h-8 text-blue-600" />,
      title: "Modern Manufacturing",
      description: "State-of-the-art facility with advanced machinery"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks at every production stage"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "Skilled professionals with decades of experience"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Industry Recognition",
      description: "Trusted by leading companies across industries"
    }
  ];

  return (
    <>
      <Banner title="About R.S. Industries" breadcrumb="About" image={bannerImage} />
      
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Company Introduction */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Our Company</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed">
                R.S. Industries is a premier manufacturer and supplier of precision machinery parts, turning components, 
                and specialized job works. With our commitment to excellence, we deliver superior quality products that 
                meet international standards.
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Company Details */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded with a vision to revolutionize the manufacturing sector, R.S. Industries has grown from 
                  a small workshop to a full-fledged production facility serving clients across multiple industries.
                </p>
                <p className="text-gray-600 mb-6">
                  Our journey has been marked by continuous innovation, investment in technology, and an unwavering 
                  commitment to customer satisfaction.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Corporate Office</h3>
                      <p className="text-gray-600">Plot No. 21, Prem Enclave, Meerut Road, Ghaziabad</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Factory className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Manufacturing Facility</h3>
                      <p className="text-gray-600">
                        Khasra No. 1087, Vikes Nagar, Opposite D.P.S., Near Kailash Hospital, 
                        Opposite Ultam Toyota, Meerut Road, Ghaziabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="R.S. Industries Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 bg-blue-700 rounded-xl p-8 md:p-12 text-white">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-6">
              "To deliver precision-engineered components with uncompromising quality, fostering long-term 
              partnerships through reliability, innovation, and exceptional service."
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">Quality First</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">Customer Focus</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">Continuous Improvement</span>
              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">Innovation Driven</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;