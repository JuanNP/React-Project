import { useEffect } from "react";
import {
    auth,
    getUserInfo,
    userExists,
    registerNewUser,
} from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export default function AuthProvider({
    children, 
    onUserLoggedIn, 
    onUserNotLoggedIn, 
}){     
    const navigate = useNavigate();

    useEffect(() => {
        var min = 1718231256;
        var max = 3429456756;
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const uid = user.uid;
    
            const exists = await userExists(user.uid);
    
            if (exists) {
              const loggedUser = await getUserInfo(uid);
    
              if (!loggedUser.processCompleted) {
                console.log("Falta username");
                navigate("/choose-username");
              } else {
                console.log("Usuario logueado completo");
                onUserLoggedIn(loggedUser);
              }
            } else {
              await registerNewUser({
                uid: user.uid,
                displayName: user.displayName,
                profilePicture: user.photoURL,
                username: "",
                processCompleted: false,
                saldo: 0,
                correo: user.email,
                cedula: "",
                numeroCuenta: Math.floor(Math.random()*(max-min+1)+min),
                tipoCuenta: "",
              });
              navigate("/choose-username");
            }
          } else {
            onUserNotLoggedIn();
          }
        });
      }, []);

    return <div>{children}</div>
}
