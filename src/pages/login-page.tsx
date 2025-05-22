import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface LoginPageProps {
  onLogin: (email: string, password: string) => Promise<void>; // Changed to Promise<void>
  loading?: boolean;
}

export default function LoginPage({ onLogin, loading }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onLogin(email, password); // Added await
      // If login is successful, redirect to previous page or home
      // Token check is now implicitly handled by AuthContext and ProtectedRoute
      const from = (location.state as any)?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      // Handle login error (e.g., display a message to the user)
      console.error("Login failed:", error);
      // You might want to set an error state here to show in the UI
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        background: "#181818",
      }}
    >
      <Card
        sx={{
          minWidth: 340,
          maxWidth: 380,
          boxShadow: 6,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            align="center"
            gutterBottom
          >
            Login
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              variant="outlined"
              size="medium"
              autoComplete="email"
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              variant="outlined"
              size="medium"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                background: "#FFD500",
                color: "#222",
                fontWeight: 600,
                borderRadius: 2,
                "&:hover": { background: "#FFC107" },
              }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
