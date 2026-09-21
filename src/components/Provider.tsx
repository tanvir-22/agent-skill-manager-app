"use client";
import React, { ReactNode } from "react";
import { AuthProvider } from "@/app/hooks/useAuth";
const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
};

export default Provider;
