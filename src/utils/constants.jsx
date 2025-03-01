import images1 from "../components/Header/images/4-250x250.webp";
import images2 from "../components/Header/images/5jggim2cfty.webp";
import images3 from "../components/Header/images/download (1).jpg";
import images4 from "../components/Header/images/download (2).jpg";
import images5 from "../components/Header/images/download.jpg";
import images6 from "../components/Header/images/4-250x250.webp";
import images7 from "../components/Header/images/5jggim2cfty.webp";
import images8 from "../components/Header/images/images (1).jpg";
import images9 from "../components/Header/images/images (2).jpg";
import images10 from "../components/Header/images/images (3).jpg";
import images11 from "../components/Header/images/images (4).jpg";
import images12 from "../components/Header/images/roller-for-continuous-casting-machine55501110702.webp";

const products = [
  {
    id: 1,
    image: images1,
    name: 'Machinery Part',
    description: 'High-quality machinery parts for industrial use.',
  },
  {
    id: 2,
    image: '/images/turning-component.jpg',
    name: 'Turning Component',
    description: 'Precision turning components for various applications.',
  },
  {
    id: 3,
    image: '/images/custom-job.jpg',
    name: 'Custom Job Work',
    description: 'Custom job works tailored to your requirements.',
  },
  {
    id: 4,
    image: '/images/industrial-tool.jpg',
    name: 'Industrial Tool',
    description: 'Durable industrial tools for heavy-duty tasks.',
  },
  // Add more products here...
];

export default products;


export const services = [
  {
    id: 1,
    name: "Machinery Parts Manufacturing",
    shortDescription: "High-quality machinery parts tailored to your needs.",
    description: "We specialize in manufacturing precision machinery parts for various industries, ensuring durability and performance.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMWunwOqJV6HJhlbl1Cu03FU1rre1UzA7Cw&s",
    features: [
      { name: "Material", value: "Steel, Aluminum, etc." },
      { name: "Precision", value: "±0.01mm" },
      { name: "Delivery Time", value: "2-4 weeks" },
    ],
  },
  {
    id: 2,
    name: "Turning Components",
    shortDescription: "Custom turning components for industrial applications.",
    description: "Our turning components are designed to meet the highest standards of accuracy and reliability.",
    image: "https://3.imimg.com/data3/PP/PX/MY-2921551/turning-components.jpg",
    features: [
      { name: "Material", value: "Stainless Steel, Brass, etc." },
      { name: "Tolerance", value: "±0.02mm" },
      { name: "Delivery Time", value: "3-5 weeks" },
    ],
  },
  {
    id: 3,
    name: "Job Works",
    shortDescription: "Custom job works for unique industrial requirements.",
    description: "We offer custom job works to meet specific industrial needs, ensuring quality and precision.",
    image: "https://www.indiafilings.com/learn/wp-content/uploads/2016/07/Job-Work.jpg",
    features: [
      { name: "Scope", value: "Custom designs and prototypes" },
      { name: "Material Options", value: "Multiple options available" },
      { name: "Delivery Time", value: "Based on project scope" },
    ],
  },
];

