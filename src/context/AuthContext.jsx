"use client";

import { signinApi, signupApi } from "@/services/authService";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { createContext, useReducer, useContext } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "signin":
      return { user: action.payload, isAuthenticated: true };
    case "signup":
      return { user: action.payload, isAuthenticated: true };

    default:
  }
};

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  async function signin(values) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errMsg });
      toast.error(errMsg);
    }
  }

  async function signup() {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errMsg = error?.response?.data?.message;
      dispatch({ type: "rejected", payload: errMsg });
      toast.error(errMsg);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context === undefined) throw new Error("not found  auth Context");
  return context;
}
