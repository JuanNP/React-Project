import "./Navbar.css"
import { Box, Flex, Heading, Spacer, HStack, Link, Avatar, Text } from "@chakra-ui/react"
import { RiBankFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getUserInfo } from "../../firebase/firebase";

const TopBar = () => {

  const navigate = useNavigate();

  const [photoURL, setPhotoURL] = useState(undefined);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, callBackAuthState);
  }, []);

  async function callBackAuthState(user){
    if(user){
      const uid = user.uid;
      const loggedUser = await getUserInfo(uid);
      
      setUserName(loggedUser.username);

      await setPhotoURL(loggedUser.profilePicture);
    }
  }

  return (
    <Box className="bar" w="auto" h='55px'>
      <Flex gap='5' ml='auto' pt='1' pb='1'>
        <Spacer />
        <Link
          color='white'
          _hover={{ textDecoration: 'none' }}
          onClick={() => navigate('/dashboard')}
        >
          <HStack spacing='1' p='0.3vw'>
              <RiBankFill size='2em'/>
              <Heading size='xl'>Banca Web</Heading>
          </HStack>
        </Link>
        <Spacer />
        <Link className='user' h='auto' minW='30px' position='absolute' top='1.5' right='7' onClick={() => navigate('/perfil')}>
          <Text className='user-name'>{userName}</Text>
          <Avatar
            w='calc(1.2vw + 1.2vh )'
            h='auto'
            src={photoURL} 
            alt="Avatar" 
            />
        </Link>
      </Flex>
    </Box>
  )
}



export default TopBar
