import { AuthService } from "@/service";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import nextCookie from "next-cookies";
import Cookie from "js-cookie";

export const withAuthServerSide = (
  fn: (
    context: GetServerSidePropsContext
  ) => Promise<GetServerSidePropsResult<any>>
) => {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<any>> => {
    const token = getAuthenticationTokenFromContext(context);

    if (!token) {
      return {
        redirect: {
          destination: `/login?redirect=${context.resolvedUrl}`,
          statusCode: 302,
        },
        props: {},
      };
    }

    return fn(context);
  };
};

export const getAuthenticationTokenFromContext = (context: any) => {
  const token = nextCookie(context)[AuthService.AUTH_TOKEN_COOKIE_STORAGE_KEY];
  return token;
};

export const getAuthenticationTokeFromCookie = () => {
  return Cookie.get(AuthService.AUTH_TOKEN_COOKIE_STORAGE_KEY);
};
