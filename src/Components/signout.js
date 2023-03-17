import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AuthProvider from "../Components/authProvider";
import { logout } from "../firebase/firebase";

export default function SignOut() {
  useEffect(() => {}, []);
  const navigate = useNavigate();

  return (
    <AuthProvider
      onUserLoggedIn={async () => {
        await logout();
        navigate("/login");
      }}
      onUserNotLoggedIn={() => {
        navigate("/login");
      }}
    ></AuthProvider>
  );
}