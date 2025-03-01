import React from 'react';
import "./ServiceCards.css"

// Icons as SVG components
const ShieldIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 70 L30 30 L70 30 M40 50 L55 35" stroke="white" strokeWidth="4" />
    <path d="M70 50 A20 20 0 1 1 50 70" stroke="white" strokeWidth="4" fill="none" />
  </svg>
);

const TimerIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="55" r="25" stroke="white" strokeWidth="4" fill="none" />
    <line x1="50" y1="55" x2="60" y2="45" stroke="white" strokeWidth="4" />
    <line x1="50" y1="30" x2="50" y2="20" stroke="white" strokeWidth="4" />
    <line x1="40" y1="20" x2="60" y2="20" stroke="white" strokeWidth="4" />
  </svg>
);

const SupportIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35 45 C35 30, 65 30, 65 45 L65 55 C65 70, 80 70, 80 80 L65 80" stroke="white" strokeWidth="4" fill="none" />
    <path d="M50 70 A15 15 0 1 0 35 55 L35 45" stroke="white" strokeWidth="4" fill="none" />
  </svg>
);

const ServiceCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className="service-card" style={{ backgroundColor: bgColor }}>
      <div className="icon-container">
        {icon}
      </div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    
    {
      icon: <TimerIcon />,
      title: "FAST DELIVERY",
      description: "You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing.",
      bgColor: "#008dbe"
    },
    {
      icon: <SupportIcon />,
      title: "24/7 Support",
      description: "All of which explains why you'll find the team of outstanding support at Transportation ready to apply their passion for solutions in support of your business.",
      bgColor: "#00a3e0"
    }
  ];

  return (
    <div className="service-cards-container">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          bgColor={service.bgColor}
        />
      ))}
    </div>
  );
};

export default ServiceCards;