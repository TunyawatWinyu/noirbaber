import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Page/Home";
import Service from "./Page/Service";
function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
