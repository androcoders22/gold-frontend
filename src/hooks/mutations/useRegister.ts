import { useMutation } from "@tanstack/react-query";
import type { RegisterInput } from "../../schemas/register";
import axiosClient from "../../utils/axiosClient";
import { useNotification } from "../../context/notification-context";

function useRegister() {
  const { showNotification } = useNotification();
  const mutation = useMutation({
    mutationKey: ["register"], // Mutation key for identifying this mutation
    mutationFn: async ({ email, password }: RegisterInput) => {
      const res = await axiosClient.post("/users", {
        email,
        password,
        firstName: "string",
        lastName: "string",
        phone: "+911234567890",
        country: "string",
        type: "Buyer",
        isEmailVerified: true,
      });

      return res.data;
    },
    onSuccess: () => {
      showNotification("Registration successful", "success");
      // Optionally, you can redirect the user or perform other actions
      // For example, redirect to login page or home page
      // navigate("/login");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || "Registration failed",
        "error",
      );
    },
  });

  return {
    register: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}

export default useRegister;
