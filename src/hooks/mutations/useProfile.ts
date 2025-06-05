import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axiosClient from "../../utils/axiosClient";
import type { ProfileInput } from "../../schemas/profile";
import { useNotification } from "../../context/notification-context";
import { AxiosError } from "axios";

const PROFILE_QUERY_KEY = ["profile"];

interface ProfileResponse extends ProfileInput {
  usernameUpdatedAt: string;
  imageUrl: string;
}

export const useProfile = () => {
  const queryClient = useQueryClient();
  const { showNotification } = useNotification();

  const { data: profile, isLoading } = useQuery({
    queryKey: PROFILE_QUERY_KEY,
    queryFn: async () => {
      const response = await axiosClient.get<ProfileResponse>("/profile");
      return response.data;
    },
  });

  const updateProfile = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: async (data: Partial<ProfileInput>) => {
      const response = await axiosClient.post("/profile", data);
      return response.data;
    },

    onError: (error: AxiosError<{ message: string | string[] }>) => {
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

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const clearSelection = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const updatePicture = useMutation({
    mutationKey: ["updateProfilePicture"],
    mutationFn: async () => {
      if (!selectedFile) throw new Error("No file selected");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await axiosClient.post("/profile/picture", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
    onError: (error: AxiosError<{ message: string | string[] }>) => {
      console.error("Error updating profile picture:", error);
      const errorMsg = error?.response?.data?.message;
      let errorMessage = "Failed to update profile picture";

      if (Array.isArray(errorMsg)) {
        errorMessage = errorMsg.join(", ");
      } else if (typeof errorMsg === "string") {
        errorMessage = errorMsg;
      }

      showNotification(errorMessage, "error");
    },
    onSuccess: (newProfile) => {
      queryClient.setQueryData(PROFILE_QUERY_KEY, newProfile);
      showNotification("Profile picture updated successfully", "success");
      clearSelection();
    },
  });

  return {
    profile,
    isLoading,
    updateProfile: updateProfile.mutate,
    isUpdating: updateProfile.isPending,
    selectedFile,
    previewUrl,
    handleFileSelect,
    clearSelection,
    updatePicture: updatePicture.mutate,
    isUpdatingPicture: updatePicture.isPending,
  };
};
