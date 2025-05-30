import React, { createContext, useContext, type ReactNode } from "react";
import useAuthStatus, { type User } from "../hooks/useAuthStatus";
import useLogin from "../hooks/mutations/useLogin";
import useLogout from "../hooks/mutations/useLogout";
import { getToken } from "../utils/tokenStorage";
import type { LoginInput } from "../schemas/login";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  login: (data: LoginInput) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { login, isLoading: isLoginLoading } = useLogin();
  const { logout, isLoading: isLogoutLoading } = useLogout();
  const { data: authData, isLoading: isAuthLoading } = useAuthStatus();

  const value = {
    user: authData?.user ?? null,
    isAuthenticated: authData?.isAuthenticated ?? false,
    isLoading: isLoginLoading || isLogoutLoading || isAuthLoading,
    token: getToken(),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
