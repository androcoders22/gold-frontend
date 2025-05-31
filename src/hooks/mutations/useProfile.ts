import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosClient from "../../utils/axiosClient";
import type { ProfileInput } from "../../schemas/profile";
import { useNotification } from "../../context/notification-context";

const PROFILE_QUERY_KEY = ["profile"];

export const useProfile = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { data: profile, isLoading } = useQuery({
    queryKey: PROFILE_QUERY_KEY,
    queryFn: async () => {
      const response = await axiosClient.get("/profile");
      return response.data as ProfileInput;
    },
  });

  const updateProfile = useMutation({
    mutationFn: async (data: Partial<ProfileInput>) => {
      const response = await axiosClient.post("/profile", data);
      return response.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error("Error updating profile:", error);
      // Optionally, you can show a notification or handle the error
      const errorMsg = error?.response?.data?.message;
      let errorMessage = "Failed to update profile";

      if (Array.isArray(errorMsg)) {
        errorMessage = errorMsg.join(", ");
      } else if (typeof errorMsg === "string") {
        errorMessage = errorMsg;
      }

      showNotification(errorMessage, "error");
    },
    onSuccess: (newProfile) => {
      queryClient.setQueryData(PROFILE_QUERY_KEY, newProfile);
    },
  });

  return {
    profile,
    isLoading,
    updateProfile: updateProfile.mutate,
    isUpdating: updateProfile.isPending,
  };
};
