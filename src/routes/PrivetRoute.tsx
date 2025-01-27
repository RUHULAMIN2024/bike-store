import { selectCurrentUser } from "@/redux/services/auth/authSlice";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";

const PrivetRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const currentUser = useAppSelector(selectCurrentUser);

  if (currentUser) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivetRoute;
