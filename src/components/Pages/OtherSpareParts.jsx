const HydraulicPartCard = () => {
  const hydraulicParts = [
    {
      id: 1,
      title: "PIPE & V SEAL",
      description: "Experience superior sealing solutions with our range of pipe V seals. Crafted to precision, these seals are available in standard lengths and various measurements, offering quality performance at economical prices.",
      image: "https://via.placeholder.com/400x250?text=PIPE+V+SEAL",
      features: [
        "Precision crafted seals",
        "Standard lengths available",
        "Various measurements",
        "Economical pricing",
        "Reliable performance"
      ]
    },
    {
      id: 2,
      title: "GEAR PUMP",
      description: "Our gear pumps, featuring external teeth and fixed displacement, offer simple yet economical pumping solutions. With a swept volume ranging from 1 cm to 200 cm.",
      image: "https://via.placeholder.com/400x250?text=GEAR+PUMP",
      features: [
        "External teeth design",
        "Fixed displacement",
        "Swept volume: 1-200 cm³",
        "Economical solution",
        "Wide industry applications"
      ],
      applications: ["Machinery", "Mining", "Transportation", "Agriculture"]
    },
    {
      id: 3,
      title: "DIRECTION / FLOW CONTROL VALVE",
      description: "Achieve precise control over hydraulic systems with our range of direction and flow control valves. Designed to work seamlessly with hydraulic actuators.",
      image: "https://via.placeholder.com/400x250?text=CONTROL+VALVE",
      features: [
        "Precise hydraulic control",
        "Works with hydraulic actuators",
        "No external power needed",
        "Pressure regulation",
        "Flow control capabilities"
      ]
    },
    {
      id: 4,
      title: "HYDRAULIC CYLINDER",
      description: "Specialized in manufacturing high-quality hydraulic cylinders tailored to meet specific customer requirements with bore diameters from 25mm to 600mm.",
      image: "https://via.placeholder.com/400x250?text=HYDRAULIC+CYLINDER",
      features: [
        "Custom-built solutions",
        "Bore diameter: 25mm-600mm",
        "Stroke length up to 6000mm",
        "Premium materials",
        "Exceptional durability"
      ],
      materials: ["ST 52.3 BK grade seamless tubes", "Hard chrome-plated rods"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Hydraulic Spare Parts</h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Premium quality hydraulic components for industrial applications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {hydraulicParts.map((part) => (
          <div key={part.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={part.image} 
                alt={part.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{part.title}</h2>
              <p className="text-gray-600 mb-4">{part.description}</p>
              
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {part.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {part.applications && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Applications:</h3>
                  <div className="flex flex-wrap gap-2">
                    {part.applications.map((app, idx) => (
                      <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {part.materials && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Premium Materials:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {part.materials.map((material, idx) => (
                      <li key={idx}>{material}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                Request Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HydraulicPartCard;