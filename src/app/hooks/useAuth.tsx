"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  email: string;
  name: string;
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
interface LoginCredentials {
  email: string;
  password: string;
}
interface RegisterCredentials extends LoginCredentials {
  name: string;
}
interface AuthResponse {
  user: User;
  message?: string;
  error?: string;
}

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  register: (credentials: RegisterCredentials) => Promise<AuthResponse>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });
  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/me", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setAuthState({
          user: data?.user,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    } catch {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  }, []);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<AuthResponse> => {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });
      const data: AuthResponse = await response.json();
      if (!response.ok) {
        throw new Error("Login failed");
      }
      setAuthState({
        user: data?.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return data;
    },
    [],
  );

  const register = useCallback(
    async (credentials: RegisterCredentials): Promise<AuthResponse> => {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });
      const data: AuthResponse = await response.json();

      if (!response.ok) {
        throw new Error("Registration failed");
      }
      setAuthState({
        user: data?.user,
        isAuthenticated: true,
        isLoading: false,
      });
      return data;
    },
    [],
  );

  const logout = useCallback(async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
    router.push("/login");
  }, [router]);
  const value: AuthContextType = {
    ...authState,
    login,
    register,
    logout,
    checkAuth,
  };
  return <AuthContext value={value}>{children}</AuthContext>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
