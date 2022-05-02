import { Authorized } from "@/components/auth";
import { PostCreateActionButton } from "@/components/post";
import { Button } from "@/components/ui";
import { AuthService } from "@/service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const Navbar = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await AuthService.logout();
    router.reload();
  }, []);

  return (
    <nav className="bg-blue-500 py-2 px-4 h-20 flex items-center justify-between">
      <Link href="/">
        <a title="Home" className="text-white font-medium text-2xl">
          Post Crud Web Application
        </a>
      </Link>
      <div className="space-x-4">
        <Authorized>
          <PostCreateActionButton />
        </Authorized>
        <Authorized>
          <Button onClick={handleLogout}>Logout</Button>
        </Authorized>
        <Authorized inverse>
          <Link href="/login">
            <a title="Login to application">
              <Button>Login</Button>
            </a>
          </Link>
        </Authorized>
      </div>
    </nav>
  );
};
