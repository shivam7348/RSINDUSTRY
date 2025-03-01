import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header2 from "../src/components/Header/Header2"
import MiddleHeader from "./components/Header/MiddleHeader";
function Layout() {


  return (
    <>
    <MiddleHeader/>
    <Header2 />
      <Outlet/>
     
      
      <Footer />
    </>
  );
}

export default Layout;
