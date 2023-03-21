import { auth } from "@/firebase";
import { useAuth } from "@/hooks/useAuth";
import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

interface AuthContextState {
  user: User | null;
  error: string;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  error: "",
  isLoading: false,
  signIn: async () => {},
  signUp: async () => {},
  logOut: async () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    logOut,
    user,
    signIn,
    signUp,
    isLoading,
    error,
    setUser,
    setIsLoading,
  } = useAuth();
  const [initialLoader, setInitialLoader] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      user,
      logOut,
      signIn,
      signUp,
      error,
      isLoading,
      setIsLoading
    }),

    //eslint-disable-next-line
    [user, isLoading, error]
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsLoading(false)
      setInitialLoader(false);
    });

    //eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!initialLoader ? children : "Loader..."}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
