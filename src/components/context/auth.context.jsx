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

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
