import React, { useEffect } from 'react';
import "./ServiceCards.css";

// Updated SVG Icons with better visibility
const ShieldIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 L75 30 V60 Q50 90 25 60 V30 Z" stroke="currentColor" strokeWidth="4" fill="none" />
    <circle cx="50" cy="45" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
  </svg>
);

const FactoryIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="50" width="60" height="30" stroke="currentColor" strokeWidth="4" fill="none" />
    <polygon points="40,50 50,40 60,50" stroke="currentColor" strokeWidth="4" fill="none" />
    <line x1="30" y1="50" x2="30" y2="80" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const HeadsetIcon = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M25 50 Q20 55 20 65 V70" stroke="currentColor" strokeWidth="4" fill="none" />
    <path d="M75 50 Q80 55 80 65 V70" stroke="currentColor" strokeWidth="4" fill="none" />
  </svg>
);

const ServiceCard = ({ icon, title, description, bgColor, textColor }) => {
  return (
    <div className="service-card" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="icon-container">{icon}</div>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

const ServiceCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <ShieldIcon />, 
      title: "Robust Security",
      description: "We implement cutting-edge security measures to ensure complete protection for your supply chain.",
      bgColor: "#E3F2FD",  // Light blue background
      textColor: "#0D47A1" // Dark blue text
    },
    {
      icon: <FactoryIcon />, 
      title: "Advanced Manufacturing",
      description: "Our production methods guarantee high-quality products tailored to meet modern demands.",
      bgColor: "#E8F5E9",  // Light green background
      textColor: "#1B5E20" // Dark green text
    },
    {
      icon: <HeadsetIcon />, 
      title: "24/7 Assistance",
      description: "Our dedicated support team is always available to help you with your logistics and operational needs.",
      bgColor: "#FFF8E1",  // Light amber background
      textColor: "#E65100" // Dark orange text
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
          textColor={service.textColor}
        />
      ))}
    </div>
  );
};

export default ServiceCards;