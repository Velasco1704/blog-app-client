import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useSelector((state: RootState) => state.user);
  return !user ? <Navigate to="/login" /> : children;
};
