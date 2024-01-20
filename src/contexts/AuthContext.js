import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const user = {
  email: "fernando.imkt@hotmail.com",
  password: "12345",
};

export const AuthContextProvider = ({ children }) => {

  const [loggedIn, setLoggedIn] = useState("no");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const onLogIn = () => {
    if (email === user.email && password === user.password) { setLoggedIn("si"); }
    else { setLoggedIn("no"); }
  };


  return (
    <AuthContext.Provider value = {{ loggedIn, setEmail, setPassword, onLogIn }}>
      { children }
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);


