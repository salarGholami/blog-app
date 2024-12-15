const { createContext, useReducer, useContext } = require("react");

const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {};

export default function AuthProvider({ children }) {
  const [{ user, isAuthenticated, isLoading, error }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  function signin() {}
  function signup() {}

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, error, signin, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context === undefined) throw new Error("not found  auth Context");
  return context;
}
