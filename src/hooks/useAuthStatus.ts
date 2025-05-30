import { useQuery } from "@tanstack/react-query";
import axiosClient from "../utils/axiosClient";
import { getToken } from "../utils/tokenStorage";

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
}

interface AuthStatus {
  isAuthenticated: boolean;
  user: User | null;
}

function useAuthStatus() {
  const token = getToken();

  return useQuery({
    queryKey: ["auth-status", token],
    queryFn: async (): Promise<AuthStatus> => {
      if (!token) {
        return { isAuthenticated: false, user: null };
      }

      try {
        const response = await axiosClient.get("/auth");
        return {
          isAuthenticated: true,
          user: response.data.user,
        };
      } catch {
        return { isAuthenticated: false, user: null };
      }
    },
    // Don't refetch on window focus if no token exists
    enabled: !!token,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    retry: false, // Don't retry failed requests
  });
}

export type { User, AuthStatus };
export default useAuthStatus;
