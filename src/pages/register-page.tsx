import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, type RegisterInput } from "../schemas/register";
import useRegister from "../hooks/mutations/useRegister";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const { register: apiRegister } = useRegister();

  const onSubmit = (data: RegisterInput) => {
    apiRegister(data);
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
            onSubmit={handleSubmit(onSubmit)}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            <TextField
              {...register("email")}
              type="email"
              label="Email"
              variant="outlined"
              size="medium"
              autoComplete="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register("password")}
              type="password"
              label="Password"
              variant="outlined"
              size="medium"
              autoComplete="new-password"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <TextField
              {...register("confirmPassword")}
              type="password"
              label="Confirm Password"
              variant="outlined"
              size="medium"
              autoComplete="new-password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
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
