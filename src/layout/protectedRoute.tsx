import { userCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type RouteGuardProps = { children: ReactNode };

export function RouteGuard({ children }: RouteGuardProps) {
  const token = useAppSelector(userCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}
