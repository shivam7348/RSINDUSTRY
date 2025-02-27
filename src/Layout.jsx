import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function Layout() {


  return (
    <>
    <Navbar />
      <Outlet/>
     
      
      <Footer />
    </>
  );
}

export default Layout;
