"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    await gitHubSignIn();
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }
  return (
    <main className="flex flex-col items-center h-screen">
      <h1 className="text-3xl font-bold">Shopping List login</h1>
      <div className="m-auto">
        {user ? (
          <div className="">
            <p>
              Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleSignOut} className="hover:underline">
              Sign out
            </button>
            <br />
            <Link href="./week-9/shopping-list">Continue to shopping list</Link>
          </div>
        ) : (
          <button onClick={handleSignIn} className="hover:underline">
            Sign in with GitHub
          </button>
        )}
      </div>
    </main>
  );
}
