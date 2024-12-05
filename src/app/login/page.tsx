"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import LoginLayout from "@/components/layouts/LoginLayout";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import logo from "@/assets/logo2.png";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loggingIn, setLoggingIn] = useState(false);
  const [success, setSuccess] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const redirectToDashboard = useCallback(
    (role: string) => {
      switch (role) {
        case "ADMIN":
          router.replace("/dashboard/admin");
          break;
        case "EDITOR":
          router.replace("/dashboard/editor");
          break;
        case "USER":
          router.replace("/dashboard/user");
          break;
        default:
          router.replace("/login");
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
    setLoggingIn(true);
    setError("");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
      setLoggingIn(false);
    } else if (session?.user?.role) {
      setSuccess(true); // Success state to show "Successfully logged in"
      setTimeout(() => redirectToDashboard(session.user.role), 2000);
    }
  };

  // Show spinner if session status is loading or authenticated
  if (status === "loading" || status === "authenticated") {
    return <LoadingSpinner />;
  }

  // Render the login form only when the user is unauthenticated
  if (status === "unauthenticated") {
    return (
      <LoginLayout>
        <div className="flex flex-col items-center min-h-screen bg-gray-100 pt-8">
          {/* Logo Positioned Outside and Centered */}
          <div className="mb-6">
            <Image
              src={logo}
              alt="Logo"
              width={180} // Adjust as needed
              height={150} // Adjust as needed
            />
          </div>

          {/* Login Card */}
          <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            {/* Back to Home Link */}
            <div className="absolute top-4 left-4">
              <Link href="/" className="text-indigo-500 hover:underline">
                &larr; Back to Home
              </Link>
            </div>

            <h1 className="mb-6 text-2xl font-semibold text-center text-gray-700">Login</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                onClick={() => setPasswordVisible((prev) => !prev)}
              />
            </div>
              <button
                type="submit"
                disabled={loggingIn || success} // Disable button during login or after success
                className={`w-full px-4 py-2 font-semibold rounded-md ${
                  success
                    ? "bg-green-500 cursor-not-allowed text-white"
                    : loggingIn
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-indigo-500 hover:bg-indigo-600 text-white"
                }`}
              >
                {success ? "Successfully Logged In" : loggingIn ? "Logging in..." : "Login"}
              </button>
              {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            </form>

            {/* Register and Forget Password Links */}
            {/* <div className="flex justify-between mt-4 text-sm text-indigo-500">
              <Link href="/register" className="hover:underline">
                Register
              </Link>
              <Link href="/forget-password" className="hover:underline">
                Forget Password?
              </Link>
            </div> */}
          </div>
        </div>
      </LoginLayout>
    );
  }

  return null; // Prevent rendering anything if session status is undefined
}
