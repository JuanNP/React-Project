import { useState, useEffect } from "react";
import './home.css'
import { Box, Container, Stat, Text, Heading, Button} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { 
  auth,
  getUserInfo,
  db, 
} from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const Home = () => {
  const navigate = useNavigate();

  const [currentUserNumeroCuenta, setCurrentUserNumeroCuenta] = useState(null);
  const [currentUserSaldo, setCurrentUserSaldo] = useState(null);
  const [currentUserTipoCuenta, setCurrentUserTipoCuenta] = useState(null);

  //Lista de todos los documentos de historial 
  const [infoDocList, setInfoDocList] = useState([{ name: "", id: "" }]);
  const [infoDocListRecibe, setInfoDocListRecibe] = useState([{ name: "", id: "" }]);

  const nCuenta = currentUserNumeroCuenta;
  const saldo = currentUserSaldo;
  const tipoCuenta = currentUserTipoCuenta;

  useEffect(() => {
    onAuthStateChanged(auth, callBackAuthState);
    if(nCuenta){
      const collectionRef = collection(db, "transacciones");
      const q = query(collectionRef, where("enviaNumCuenta", "==", nCuenta));
      
      const unsub = onSnapshot(q, (snapshot) =>
        setInfoDocList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
      
      return unsub;
    }

  }, [nCuenta]);

  async function callBackAuthState(user){
    if(user){
      const uid = user.uid;
      const loggedUser = await getUserInfo(uid);
  
      setCurrentUserNumeroCuenta(loggedUser.numeroCuenta);
      setCurrentUserSaldo(loggedUser.saldo); 
      setCurrentUserTipoCuenta(loggedUser.tipoCuenta);

      if(nCuenta){
        const collectionRef = collection(db, "transacciones");
        const q = query(collectionRef, where("recibeNumCuenta", "==", nCuenta));
        
        const unsub = onSnapshot(q, (snapshot) =>
          setInfoDocListRecibe(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        
        return unsub;
      }
    }
  }

  return (
    <>
    <Container className='main' maxWidth='100%' centerContent>
      <Box className='contenedor'>
        <Box className='card' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' overflow='hidden' bg='white' p='auto' w='60%'>
            <Box p='1.5vw'>
              <Stat>
                <Heading
                  color='gray.700'
                  fontWeight='medium'
                  fontSize='calc(1em + 0.45vw)'
                  m='2'
                >
                  Saldo actual
                </Heading>
                <Text 
                  color='gray.700'
                  fontWeight='medium'
                  fontSize='calc(1em + 0.1vw)'
                  position='relative'
                  float='right'
                  textAlign='center'
                >
                  {tipoCuenta}
                  <br/>
                  {nCuenta}
                </Text>
                <Text
                  color='gray.900'
                  fontWeight='bold'
                  fontSize='calc(1em + 1.5vw)'
                  fontFamily='roboto'
                  m='0'
                  whiteSpace='break-spaces'
                >
                ${saldo}
                </Text>
                <Button 
                  width='200px' 
                  height='3vh' 
                  borderRadius='20px'
                  fontSize='15px'
                  fontWeight='bold'
                  color='white'
                  bg='#00376f'
                  p='20px'
                  mt='20px'
                  mb='10px'
                  onClick={() => navigate('/transferencias')}

                  _hover={{
                    transform: 'scale(1.05)',
                    transition: '0.3s',
                    bg: '#034F9B',
                    cursor: 'pointer'
                  }}

                >
                  Transferir
                </Button>
              </Stat>
            </Box>
        </Box>

        <TableContainer className='tablaContainer' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' bg='white' mt='70px'>
          <Table className='tabla'>
            <Thead>
              <Tr>
                <Th>
                  Resumen de Transacciones - <Link to='/transacciones'>Ver más</Link>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {infoDocList.map((info) => (
                <Tr>
                <Td>{info.recibeNumCuenta} - {info.recibe}
                  <br/>
                  {info.comentario}
                  <br/>
                  <Text className='monto'>
                  $-{info.cantida}
                  </Text>
                </Td>
              </Tr>
              ))
              }

              {infoDocListRecibe.map((infoRecibe) => (
                <Tr>
                  <Td>{infoRecibe.enviaNumCuenta} - {infoRecibe.envia}
                    <br/>
                    {infoRecibe.comentario}
                    <br/>
                    <Text className='montoReci'>
                    $+{infoRecibe.cantida}
                    </Text>
                  </Td>
                </Tr>
              ))
              }
              
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
    </>
  )
  
}
