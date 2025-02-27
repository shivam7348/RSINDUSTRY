import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import Contact from "./components/Pages/Contact";




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
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "services",
        element: <Services/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
      
    ],
  },
]);

export default router;
