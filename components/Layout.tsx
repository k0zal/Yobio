// import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useContext } from "react";

const Layout = ({ children }: any) => {


  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
