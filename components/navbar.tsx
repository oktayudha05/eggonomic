import { authUserSession } from "@/libs/auth-lib";
import Link from "next/link";

export default async function Navbar({ title }: { title: string }) {
  const session = await authUserSession();

  return (
    <>
      <nav className="fixed flex items-center justify-center py-1 top-0 left-0 right-0 z-50">
        <div className="flex space-x-3 backdrop-blur-sm overflow-hidden shadow-lg bg-black/35 rounded-2xl py-1 px-3">
          <Link
            href="/"
            className="focus:font-extrabold font-normal py-1 text-rose-100"
          >
            Home
          </Link>
          {!session ? (
            <Link
              href="/login"
              className="focus:font-extrabold font-normal py-1 text-rose-100"
            >
              Login
            </Link>
          ) : (
            <Link
              href="/login"
              className="focus:font-extrabold font-normal py-1 text-rose-100"
            >
              {session?.user?.name}
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
