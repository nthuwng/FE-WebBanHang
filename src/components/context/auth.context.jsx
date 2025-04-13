import { createContext, useState } from "react";

export const AuthContext = createContext({
  avatar: "",
  email: "",
  full_name: "",
  id: "",
  phone: "",
  role: "",
  cart: "",
});

export const AuthWrapper = (props) => {
  const [user, setUser] = useState({
    avatar: "",
    email: "",
    full_name: "",
    id: "",
    phone: "",
    role: "",
    cart: "",
  });

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
