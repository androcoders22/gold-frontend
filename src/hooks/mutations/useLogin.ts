import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { LoginInput } from "../../schemas/login";
import axiosClient from "../../utils/axiosClient";
import { useNotification } from "../../context/notification-context";
import { setToken } from "../../utils/tokenStorage";

function useLogin() {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const mutation = useMutation({
    mutationKey: [
      "login", // Mutation key for identifying this mutation
    ],
    mutationFn: async ({ login, password }: LoginInput) => {
      const res = await axiosClient.post("/auth", {
        login,
        password,
      });

      // Store token from response
      setToken(res.data.token);
      return res.data;
    },
    onSuccess: () => {
      showNotification("Login successful", "success");
      // Trigger a refetch of auth status
      queryClient.invalidateQueries({ queryKey: ["auth-status"] });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || "Login failed",
        "error",
      );
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
}

export default useLogin;
