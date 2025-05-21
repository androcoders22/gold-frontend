import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/navbar.tsx";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD500",
    },
    secondary: {
      main: "#AA00FF",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
