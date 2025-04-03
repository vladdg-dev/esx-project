import { useContext } from "react";
import { AuthContent } from "./AuthContext";

export const useAuth = () => {
  return useContext(AuthContent);
};
