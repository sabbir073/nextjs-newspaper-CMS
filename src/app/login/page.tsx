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
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </LoginLayout>
  );
}
