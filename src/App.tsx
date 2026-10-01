import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home";
import Service from "./Page/Service";
import About from "./Page/About";
import Gallery from "./Page/Gallery";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
