import { Avatar, Box, Container, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "./perfil.css";

import { 
  auth,
  getUserInfo,
} from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Perfil = () => {

  const [photoURL, setPhotoURL] = useState("");
  const [photoDefault, setPhotoDefault] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
  //https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png

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
  
      setPhotoURL(loggedUser.profilePicture);
      console.log(photoURL);
    }
  }

  return (
    <>
      <Container className='main' maxWidth='100%' mt='30px' mb='20px' centerContent>
        <Box className='data-card'>
          <Heading className='titulo'>Mi perfil</Heading>
            <Avatar className="avatar" src={photoURL} alt="Foto de perfil"/> 
          <Box className='data-container'>
            <Box className='data-div'>
              <Text className='text'>Usuario</Text>
              <Text className='data'>{userName}</Text>
            </Box>
            <Box className='data-div'>
              <Text className='text'>Cedula</Text>
              <Text className='data'>{userCedula}</Text>
            </Box>
            <Box className='data-div'>
              <Text className='text'>Correo electronico</Text>
              <Text className='data'>{userEmail}</Text> 
            </Box>
            <Box className='data-div'>
              <Text className='text'>Numero de cuenta</Text> 
              <Text className='data'>{currentUserNumeroCuenta}</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}