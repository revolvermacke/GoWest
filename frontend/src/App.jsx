import "./App.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

import Home from "./pages/Home";
import Tickets from "./pages/Tickets";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Header from "./Components/Header";
import Footer from "./Components/Footer";


// 🔹 Layout wrapper
const ProtectedLayout = () => (
  <PrivateRoute>
    <>
      <Header />

      <div className="_app">
        <Outlet />
      </div>

      <Footer />
    </>
  </PrivateRoute>
);

function App() {
  return (
    <Routes>

      {/* 🔓 PUBLIC */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🔒 PROTECTED */}
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/help" element={<Help />} />
      </Route>

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;