import { getAuthenticationTokeFromCookie } from "@/utils";
import { useMemo } from "react";

export const useAuth = () => {
  const isAuthenticated = useMemo(getAuthenticationTokeFromCookie, []);

  return isAuthenticated;
};
