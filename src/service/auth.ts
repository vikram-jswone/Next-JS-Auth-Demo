import { LoginResponse } from "@/types";
import Cookie from "js-cookie";

class AuthService {
  /**
   * @description Cookie Storage key for authentication token
   */
  public AUTH_TOKEN_COOKIE_STORAGE_KEY: string = "AUTH_TOKEN";

  /**
   * @description Handles login for the application. It accepts two paramters username and password and return response that has data of the user and token
   * @param username
   * @param password
   */
  public async login(
    username: string,
    password: string
  ): Promise<LoginResponse> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (password !== "password") {
      throw new Error("Password is invalid");
    }

    const response: LoginResponse = {
      data: {
        username: username,
      },
      token: "secure_token",
    };
    await this.onAuthenticated(response);
    return response;
  }

  /**
   * @description Handle logout of application. Basically it just removes cookie that we have stored.
   */
  public async logout() {
    Cookie.remove(this.AUTH_TOKEN_COOKIE_STORAGE_KEY);
  }

  /**
   * @description This function should call after post login and post signup to perform some actions after authentication.
   * @param response
   */
  private async onAuthenticated(response: LoginResponse) {
    Cookie.set(this.AUTH_TOKEN_COOKIE_STORAGE_KEY, response.token, {
      expires: 1,
    });
  }
}

export default new AuthService();
