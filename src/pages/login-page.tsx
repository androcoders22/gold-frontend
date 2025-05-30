import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "../schemas/login";

import useLogin from "../hooks/mutations/useLogin";

export default function LoginPage() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    login(data);
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
          <Typography variant="h5" component="div" align="center" gutterBottom>
            Login
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <TextField
              {...register("login")}
              type="email"
              label="Email"
              variant="outlined"
              size="medium"
              autoComplete="email"
              error={!!errors.login}
              helperText={errors.login?.message}
            />
            <TextField
              {...register("password")}
              type="password"
              label="Password"
              variant="outlined"
              size="medium"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password?.message}
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
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
