"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold">Secure login with NextAuth</h1>
      {!session ? (
        <>
          <p className="mt-5 text-lg">Not signed in</p>
          <button
            className="mt-3 px-4 py-2 text-white bg-blue-500 rounded"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
        </>
      ) : (
        <>
          <p className="mt-3 text-lg">Signed in as {session.user?.email}</p>
          <button
            className="mt-3 px-4 py-2 text-white bg-red-500 rounded"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </>
      )}
    </div>
  );
}
