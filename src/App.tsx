import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home";
import Service from "./Page/Service";
import About from "./Page/About";
import Gallery from "./Page/Gallery";
import Contact from "./Page/Contact";
import { useEffect } from "react";

function App() {
  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contatti" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
