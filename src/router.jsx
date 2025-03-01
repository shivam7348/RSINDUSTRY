import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import AboutUs from "./components/About/About";
import ProductComponent from "./components/Pages/Products";
import WorkWith from "./components/Pages/WorkWoth";
import Gallery from "./components/Pages/Gallery";
import ContactUs from "./components/Pages/Contact";


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
      {
        path: "work-with",
        element: <WorkWith />,
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