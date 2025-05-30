import { type ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth-context";

interface GuestGuardProps {
  children: ReactNode;
}

interface LocationState {
  from: {
    pathname: string;
  };
}

export default function GuestGuard({ children }: GuestGuardProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show nothing while checking authentication
  if (isLoading) {
    return null;
  }

  // Redirect to home if authenticated
  if (isAuthenticated) {
    const from = (location.state as LocationState)?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  // Render children if not authenticated
  return <>{children}</>;
}
