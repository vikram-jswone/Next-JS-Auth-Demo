import { useAuth } from "@/hooks";
import React, { useEffect, useState } from "react";

interface AuthorizedProps {
  children: React.ReactNode;
  inverse?: boolean;
}

export const Authorized: React.FC<AuthorizedProps> = React.memo(
  ({ children, inverse = false }) => {
    const [visible, setVisible] = useState(false);
    const isAuthorized = useAuth();

    useEffect(() => {
      setVisible(!!isAuthorized !== inverse);
    }, [isAuthorized, inverse]);

    if (visible) {
      return <>{children}</>;
    }

    return <></>;
  }
);
