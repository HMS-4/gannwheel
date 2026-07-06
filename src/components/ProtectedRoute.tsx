import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../auth/AuthProvider";

type Props = {
  children: ReactNode;
};

export default function ProtectedRoute({
  children,
}: Props) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}