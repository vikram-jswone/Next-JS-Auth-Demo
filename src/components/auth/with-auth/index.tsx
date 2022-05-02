import { getAuthenticationTokenFromContext } from "@/utils";
import { NextPage } from "next";

export const WithAuth = (WrappedComponent: NextPage<any>) => {
  if (WrappedComponent.getInitialProps) {
    WrappedComponent.getInitialProps = async (context) => {
      const token = getAuthenticationTokenFromContext(context);
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(context));

      return { ...componentProps, token };
    };
  }

  return WrappedComponent;
};
