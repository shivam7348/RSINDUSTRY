import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header2 from "../src/components/Header/Header2";

function Layout() {
  const { pathname } = useLocation(); // Current path ko track karega

  useEffect(() => {
    window.scrollTo(0, 0); // Har route change pe top pe scroll karega
  }, [pathname]); // Jab bhi pathname change hoga, scroll hoga

  return (
    <>
      <Header2 />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
