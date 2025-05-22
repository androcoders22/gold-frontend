import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import rtlCache from "./rtlCache";
import defaultCache from "./emotionCache";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar.tsx";
import "./utils/i18n";
import ProductTabs from "./components/home/Products/product-tabs.tsx";
import PromoSection from "./components/home/Products/promo-section.tsx";
import GraphSection from "./components/home/graph-section.tsx";
import Footer from "./components/home/footer.tsx";

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
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* Local direction wrapper */}
        <div dir={rtl ? "rtl" : "ltr"}>
          <Navbar rtl={rtl} onToggleDirection={() => setRtl(!rtl)} />
          <GraphSection />
          <ProductTabs />
          <PromoSection />
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
