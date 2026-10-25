import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home";
import Service from "./Page/Service";
import About from "./Page/About";
import Gallery from "./Page/Gallery";
import Contact from "./Page/Contact";
import { useEffect } from "react";
import Booking from "./Page/Booking";
import Login from "./Page/Auth/Login";
import Register from "./Page/Auth/Register";

function App() {
  const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
