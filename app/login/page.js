"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        <button
          onClick={() => signIn("google")}
          className="btn btn-primary w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
