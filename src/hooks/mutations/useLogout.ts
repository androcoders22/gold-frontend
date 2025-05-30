import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeToken } from "../../utils/tokenStorage";
import { useNotification } from "../../context/notification-context";

function useLogout() {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const mutation = useMutation({
    mutationKey: ["logout"], // Mutation key for identifying this mutation
    mutationFn: async () => {
      // const res = await axiosClient.delete("/auth");
      return true;
    },
    onSuccess: () => {
      removeToken();
      queryClient.clear(); // Clear all queries from cache
      showNotification("Logged out successfully", "success");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      showNotification(
        error?.response?.data?.message || "Logout failed",
        "error",
      );
    },
  });

  return {
    logout: mutation.mutate,
    isLoading: mutation.isPending,
  };
}

export default useLogout;
