import { Container } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { 
  auth,
  getUserInfo,
} from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Perfil = () => {

  const [photoURL, setPhotoURL] = useState(undefined);
  const [currentUserNumeroCuenta, setCurrentUserNumeroCuenta] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userCedula, setUserCedula] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, callBackAuthState);
  }, []);

  async function callBackAuthState(user){
    if(user){
      const uid = user.uid;
      const loggedUser = await getUserInfo(uid);
  
      setCurrentUserNumeroCuenta(loggedUser.numeroCuenta);
      setUserEmail(loggedUser.correo);
      setUserName(loggedUser.username);    
      setUserCedula(loggedUser.cedula); 
  
      await setPhotoURL(loggedUser.profilePicture);
    }
  }

  return (
    <>
      <Container centerContent>
        <h1>Bienvenido { userName }</h1>

        <img src={photoURL} alt="Avatar" />

        <h1>Informacion Personal</h1>

        <p>Cedula: { userCedula }</p>
        <p>Correo electronico: { userEmail }</p>
        <p>Nombre de usuario: { userName }</p>
        <p>Numero de cuenta: { currentUserNumeroCuenta }</p>

      </Container>
    </>
  );
}