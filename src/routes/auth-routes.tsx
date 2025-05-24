import { type ReactNode } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import PromoSection from "../components/home/Products/promo-section";
import GraphSection from "../components/home/graph-section";
import ProductTabs from "../components/home/Products/product-tabs";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import Cart from "../pages/cart";
import { useAuth } from "../context/auth-context";
import ShopPage from "../pages/shop";
import FaqPage from "../pages/Faq";
import AboutUsPage from "../pages/about-us";
import ContactUsPage from "../pages/contact-us";
import MyAccountPage from "../pages/my-account";
import CalculatorPage from "../pages/calculator";
import DashboardPage from "../pages/dashboard"; // Import the DashboardPage

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>;
}

function AuthRoutes() {
  const { login, isLoading } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <PromoSection />
            <GraphSection />
            <ProductTabs />
          </>
        }
      />
      <Route
        path="/shop"
        element={
          <>
            <ShopPage />
          </>
        }
      />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route
        path="/login"
        element={<LoginPage onLogin={login} loading={isLoading} />}
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/my-account"
        element={
          <ProtectedRoute>
            <MyAccountPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AuthRoutes;
