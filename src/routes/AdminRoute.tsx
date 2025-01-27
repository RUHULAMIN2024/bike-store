import { useAppSelector } from "@/redux/hooks";
import { selectCurrentUser } from "@/redux/services/auth/authSlice";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

function AdminRoute({ children }: { children: ReactNode }) {
  const location = useLocation();
  const currentUser = useAppSelector(selectCurrentUser);

  if (currentUser?.role == "admin") {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
}
export default AdminRoute;
