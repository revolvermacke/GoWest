import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Help from "./pages/Help";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;
