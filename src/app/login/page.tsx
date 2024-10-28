"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import LoginLayout from "@/components/layouts/LoginLayout";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import the spinner

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const redirectToDashboard = useCallback(
    (role: string) => {
      switch (role) {
        case "ADMIN":
          router.push("/dashboard/admin");
          break;
        case "EDITOR":
          router.push("/dashboard/editor");
          break;
        case "USER":
          router.push("/dashboard/user");
          break;
        default:
          router.push("/login");
      }
    },
    [router]
  );

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role) {
      redirectToDashboard(session.user.role);
    }
    
  }, [status, session, redirectToDashboard]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else if (session?.user?.role) {
      redirectToDashboard(session.user.role);
    }
  };

  // Show the LoadingSpinner if session is loading
  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <LoginLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 text-2xl font-semibold text-center text-gray-700">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
            >
              Login
            </button>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </LoginLayout>
  );
}
