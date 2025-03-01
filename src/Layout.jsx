import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header2 from "../src/components/Header/Header2"

function Layout() {


  return (
    <>

    <Header2 />
      <Outlet/>
     
      
      <Footer />
    </>
  );
}

export default Layout;
