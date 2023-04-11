import { useState, useEffect } from "react";
import { Box, Container, Spinner, Button, Heading, Text, Input} from "@chakra-ui/react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate,Link, } from "react-router-dom";
import {
    auth,
    existsUsername,
    getUserInfo,
    updateUser,
    userExists,
  } from "../../firebase/firebase";

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: username exists
  6: username correct
*/

export default function ChooseUserName(){

    const [currentUser, setCurrentUser] = useState(null);
    const [state, setState] = useState(0);
    let navigate = useNavigate();

    useEffect(() => {
        setState(1);
        onAuthStateChanged(auth, callBackAuthState);
      }, []);

    async function callBackAuthState(user) {
        if (user) {
          const uid = user.uid;
          console.log(user);
    
          if (userExists(user.uid)) {
            const loggedUser = await getUserInfo(uid);
            setCurrentUser(loggedUser);
            if (!loggedUser.processCompleted) {
              setState(3);
              console.log("Falta username");
            } else {
              console.log("Ya tiene username", state);
              navigate("/dashboard");
            }
          } else {
            navigate("/login");
          }
        } else {
          navigate("/login");
        }
    }

    function handleInputUsername(e) {
        const tmpUser = currentUser;
        const value = e.target.value;
        tmpUser.username = value;
        setCurrentUser({ ...tmpUser });
    }

    async function handleOnClickContinue() {
        if (currentUser.username !== "") {
          const exists = await existsUsername(currentUser.username);
          if (exists) {
            setState(5);
          } else {
            const tmpUser = currentUser;
            tmpUser.processCompleted = true;
            await updateUser(tmpUser);
            setState(6);
          }
        }
    }
    
    if (state === 6) {
        return (
          <div>
            <h1>Felicidades, precione el boton debajo para ir al dashboard</h1>
    
            <Link to="/dashboard">Continuar</Link>
          </div>
        );
    }

    if(state === 3){
       return (
        <Container centerContent maxW='container' h='100vh' display='grid' placeItems='center' bg='linear-gradient(90deg, rgba(0,55,111,1) 25%, rgba(0,212,255,1) 100%)'>
          <Box display='block' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' overflow='hidden' bg='white' p='auto' w='30%'>
            <Box p='1.5vw'>
              <Heading as='h1' fontSize='20px' fontWeight='normal' textAlign='center' mb='20px'>
                Bienvenido <Text color='#034F9B'>{currentUser.displayName}</Text> Para terminar el proceso introduce un nombre de usuario
              </Heading>
              <Input type="text" placeholder="Usuario" onInput={handleInputUsername} mt='20px' mb='20px' w='100%'/>
              <Button 
                  width='100%'
                  fontSize='15px'
                  fontWeight='bold'
                  color='white'
                  bg='#00376f'
                  p='20px'
                  mt='20px'
                  mb='10px'
                  onClick={handleOnClickContinue}

                  _hover={{
                    transform: 'scale(1.05)',
                    transition: '0.3s',
                    bg: '#034F9B',
                    cursor: 'pointer'
                  }}

                >
                  Finalizar
                </Button>
            </Box>
          </Box>
        </Container>
       );
    }

    return (
      <Container centerContent maxW='container' p={4} h='100vh' display='grid' placeItems='center'>
        <Box>
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
        </Box>
      </Container>
    );

}

