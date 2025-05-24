import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import rtlCache from "./utils/rtlCache.ts";
import defaultCache from "./utils/emotionCache.ts";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar.tsx";
import "./utils/i18n";
import AuthRoutes from "./routes/auth-routes.tsx";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/auth-context.tsx";
import Footer from "./components/footer.tsx";

interface LayoutManagerProps {
  rtl: boolean;
  onToggleDirection: () => void;
}

// Helper component to conditionally render Navbar and Footer
function LayoutManager({ rtl, onToggleDirection }: LayoutManagerProps) {
  const location = useLocation();
  const showNavAndFooter = location.pathname !== "/dashboard";

  return (
    <>
      {showNavAndFooter && (
        <Navbar rtl={rtl} onToggleDirection={onToggleDirection} />
      )}
      <AuthRoutes />
      {showNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  const [rtl, setRtl] = useState(false);
  // Update HTML dir attribute on toggle
  useEffect(() => {
    document.documentElement.setAttribute("dir", rtl ? "rtl" : "ltr");
  }, [rtl]);

  // Choose appropriate cache and theme direction
  const cache = rtl ? rtlCache : defaultCache;
  const theme = createTheme({
    direction: rtl ? "rtl" : "ltr",
    palette: {
      mode: "dark",
      primary: {
        main: "#FFD500",
        light: "#FFF9C4",
        dark: "#B28900",
      },
      secondary: { main: "#AA00FF" },
      background: { default: "#121212", paper: "#1e1e1e" },
    },
    typography: {
      fontFamily: "Noto Kufi Arabic, Roboto, Arial, sans-serif",
    },
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <div dir={rtl ? "rtl" : "ltr"}>
            <Router>
              <LayoutManager rtl={rtl} onToggleDirection={() => setRtl(!rtl)} />
            </Router>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
