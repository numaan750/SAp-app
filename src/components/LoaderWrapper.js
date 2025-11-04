"use client";
import { useContext } from "react";
import { appContext } from "@/context/appcontext";

export default function LoaderWrapper({ children }) {
  const { loading } = useContext(appContext);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        {/* Logo with rotation */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-20 h-20 mb-4 object-contain animate-bounce"
        />

        {/* Spinner */}
        <span className="w-16 h-16 animate-spin border-2 border-black "></span>

        {/* Text */}
        <p className="mt-3 text-gray-600 font-medium">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
