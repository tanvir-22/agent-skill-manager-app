// Import global styles and fonts
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex  h-screen flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-4xl text-center font-bold text-indigo-600">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-center text-sm text-gray-500">
          This page does not exist.
        </p>
        <Link  className="max-w-md mx-auto mt-2 btn btn-primary" href={"/"}>Go back</Link>
      </body>
    </html>
  );
}
