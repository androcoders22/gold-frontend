import { Routes, Route, Navigate } from "react-router-dom";
import PromoSection from "../components/home/Products/promo-section";
import GraphSection from "../components/home/graph-section";
import ProductTabs from "../components/home/Products/product-tabs";
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";
import Cart from "../pages/cart";
import ShopPage from "../pages/shop";
import FaqPage from "../pages/Faq";
import AboutUsPage from "../pages/about-us";
import ContactUsPage from "../pages/contact-us";
import MyAccountPage from "../pages/my-account";
import CalculatorPage from "../pages/calculator";
import DashboardPage from "../pages/dashboard"; // Import the DashboardPage
import { AuthGuard, GuestGuard } from "../guards";

function AuthRoutes() {
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
        element={
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        }
      />
      <Route
        path="/register"
        element={
          <GuestGuard>
            <RegisterPage />
          </GuestGuard>
        }
      />
      <Route
        path="/cart"
        element={
          <AuthGuard>
            <Cart />
          </AuthGuard>
        }
      />
      <Route
        path="/my-account"
        element={
          <AuthGuard>
            <MyAccountPage />
          </AuthGuard>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthGuard>
            <DashboardPage />
          </AuthGuard>
        }
      />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AuthRoutes;
