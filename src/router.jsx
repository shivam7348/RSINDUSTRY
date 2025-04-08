import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import AboutUs from "./components/About/About";
import ProductComponent from "./components/Pages/Products";
import Gallery from "./components/Pages/Gallery";
import ContactUs from "./components/Pages/Contact";


import ServicesPage from "./components/Pages/Services";
import ConveyorSpareParts from "./components/Pages/ConveyorSpareParts";
import RollerMillParts from "./components/Pages/RollerMillParts";
import ACSpareParts from "./components/Pages/ACSpareParts";
import OtherSpareParts from "./components/Pages/OtherSpareParts";

// Import product category components
// You'll need to create these components or modify the ProductComponent to handle categories
// import ConveyorSpareParts from "./components/Products/ConveyorSpareParts";
// import RollerMillParts from "./components/Products/RollerMillParts";
// import ACSpareParts from "./components/Products/ACSpareParts";
// import OtherSpareParts from "./components/Products/OtherSpareParts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "products",
        element: <ProductComponent />,
      },
      // Product category routes
      {
        path: "products/conveyor-spare-parts",
        element: <ConveyorSpareParts />,
      },
      {
        path: "products/roller-mill-parts",
        element: <RollerMillParts />,
      },
      {
        path: "products/ac-spare-parts",
        element: <ACSpareParts />,
      },
      {
        path: "products/other-spare-parts",
        element: <OtherSpareParts />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;