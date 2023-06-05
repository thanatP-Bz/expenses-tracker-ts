import { ReactNode } from "react";
import { useAppContext } from "../hooks/UseAppContext";
import { Navigate } from "react-router-dom";

type Children = {
  children: ReactNode;
};

export const ProtectRoutes = ({ children }: Children) => {
  const { authentication } = useAppContext();

  if (!authentication.userName) {
    return <Navigate to="/auth" />;
  }
  return <>{children} </>;
};
