import { Button, Input } from "@/components/ui";
import { AuthService } from "@/service";
import { LoginPayload } from "@/types";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

const initialValues: LoginPayload = {
  username: "",
  password: "",
};

const LoginPage: NextPage = () => {
  const [form, setForm] = useState<LoginPayload>(initialValues);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        await AuthService.login(form.username, form.password);
        setLoading(false);
        router.replace((router.query.redirect as string) || "/");
      } catch (err) {
        toast("Unable to login", { type: "error" });
        setLoading(false);
      }
    },
    [form, router]
  );

  return (
    <main className="min-h-screen justify-center items-center flex">
      <form
        className="flex flex-col md:max-w-md w-full space-y-4"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-semibold text-blue-500">Login</h2>
        <Input
          placeholder="Enter username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Enter password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button disabled={loading}>{loading ? "Loading..." : "Login"}</Button>
      </form>
    </main>
  );
};

export default LoginPage;
