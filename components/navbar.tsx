import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Navbar({ title }: { title: string }) {
  const session = await getServerSession(authOptions);

  return (
    // <header className="bg-gray-800">
    //   <nav className="container mx-auto flex items-center justify-between h-16">
    //     <div className="flex items-center">
    //       <a href="/" className="text-white text-xl font-bold">
    //         {title}
    //       </a>
    //     </div>
    //     <div className="flex items-center">
    //       {!session ? (
    //         <a href="/login" className="text-white">
    //           Login
    //         </a>
    //       ) : (
    //         <a href="/login" className="text-white">
    //           {session.user?.name}
    //         </a>
    //       )}
    //     </div>
    //   </nav>
    // </header>
    <>
      <nav className="fixed flex items-center justify-center py-1 top-0 left-0 right-0 z-50">
        <div className="flex space-x-3 backdrop-blur-sm overflow-hidden shadow-lg bg-black/35 rounded-2xl py-1 px-3">
          <Link
            href="/"
            className="focus:font-extrabold font-normal py-1 text-emerald-100"
          >
            Home
          </Link>
          {!session ? (
            <Link
              href="/login"
              className="focus:font-extrabold font-normal py-1 text-emerald-100"
            >
              Login
            </Link>
          ) : (
            <Link
              href="/login"
              className="focus:font-extrabold font-normal py-1 text-emerald-100"
            >
              {session?.user?.name}
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
