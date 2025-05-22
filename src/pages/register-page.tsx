import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Registration logic placeholder
    alert("Registration successful (dummy)");
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
        sx={{ minWidth: 340, maxWidth: 380, boxShadow: 6, borderRadius: 3 }}
      >
        <CardContent>
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Register
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
              autoComplete="new-password"
            />
            <TextField
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              variant="outlined"
              size="medium"
              autoComplete="new-password"
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
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
