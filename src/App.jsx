// هذا الملف اللي بيكون فيه كل المسارات (الشوارع) مثل ما قلت لكم
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"; //مسار الصفحة الرئيسية 
import Register from "./pages/Register";// مسار صفحة التسجيل
import Login from "./pages/Login";// مسار صفحة تسجيل الدخول
import MapPage from "./pages/MapPage";
import VendorDashboard from "./pages/VendorDashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import VendorRoute from "./routes/VendorRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <MapPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vendor"
          element={
            <VendorRoute>
              <VendorDashboard />
            </VendorRoute>
          }
        />

        <Route path="*" element={<div className="p-6">404</div>} />
      </Routes>
    </BrowserRouter>
  );
}