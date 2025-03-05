import React from 'react';
import "./ServiceCards.css";

// Updated SVG Icons
const ShieldIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L75 30 V60 Q50 90 25 60 V30 Z" stroke="white" strokeWidth="4" fill="none" />
    <circle cx="50" cy="45" r="10" stroke="white" strokeWidth="4" fill="none" />
  </svg>
);

const FactoryIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="50" width="60" height="30" stroke="white" strokeWidth="4" fill="none" />
    <polygon points="40,50 50,40 60,50" stroke="white" strokeWidth="4" fill="none" />
    <line x1="30" y1="50" x2="30" y2="80" stroke="white" strokeWidth="4" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="white" strokeWidth="4" fill="none" />
    <path d="M25 50 Q20 55 20 65 V70" stroke="white" strokeWidth="4" fill="none" />
    <path d="M75 50 Q80 55 80 65 V70" stroke="white" strokeWidth="4" fill="none" />
  </svg>
);

const ServiceCard = ({ icon, title, description, bgColor }) => {
  return (
    <div className="service-card" style={{ backgroundColor: bgColor }}>
      <div className="icon-container">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      icon: <ShieldIcon />, 
      title: "Robust Security",
      description: "We implement cutting-edge security measures to ensure complete protection for your supply chain.",
      bgColor: "#6699cc" // Lighter shade of #004a99
    },
    {
      icon: <FactoryIcon />, 
      title: "Advanced Manufacturing",
      description: "Our production methods guarantee high-quality products tailored to meet modern demands.",
      bgColor: "#66a3d2" // Lighter shade of #0077b6
    },
    {
      icon: <HeadsetIcon />, 
      title: "24/7 Assistance",
      description: "Our dedicated support team is always available to help you with your logistics and operational needs.",
      bgColor: "#66b8de" // Lighter shade of #0096c7
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
