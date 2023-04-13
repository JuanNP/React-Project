import { useState, useEffect } from "react";
import './home.css'
import { Box, Container, Stat, Text, Heading, Button, Spacer } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import { 
  auth,
  existsUsername,
  getUserInfo,
  updateUser,
  userExists,
  updateItem, 
} from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const Home = () => {

  const [currentUserNumeroCuenta, setCurrentUserNumeroCuenta] = useState(null);
  const [currentUserSaldo, setCurrentUserSaldo] = useState(null);
  const [currentUserTipoCuenta, setCurrentUserTipoCuenta] = useState(null);

  const navigate = useNavigate();

  const nCuenta = currentUserNumeroCuenta;
  const saldo = currentUserSaldo;
  const tipoCuenta = currentUserTipoCuenta;

  //#region Informacion de la tabla de resumen de pagos
  const nCuentatercero = '0987654321'
  const nombretercero = 'Juan Perez'
  const describcion = 'Pago de servicios'
  const montoTransfer = '100000'
  //#endregion

  useEffect(() => {
    onAuthStateChanged(auth, callBackAuthState);
  }, []);

  async function callBackAuthState(user){
    if(user){
      const uid = user.uid;
      const loggedUser = await getUserInfo(uid);
  
      setCurrentUserNumeroCuenta(loggedUser.numeroCuenta);
      setCurrentUserSaldo(loggedUser.saldo); 
      setCurrentUserTipoCuenta(loggedUser.tipoCuenta);
    }
  }

  return (
    <>
    <Container maxWidth='100%' mt='20px' mb='20px' centerContent>
      <Box className='contenedor'>
        <Box className='card' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' overflow='hidden' bg='white' p='auto' w='60%'>
            <Box p='1.5vw'>
              <Stat>
                <Heading
                  color='gray.700'
                  fontWeight='medium'
                  fontSize='1.45rem'
                  m='2'
                >
                  Saldo actual
                </Heading>
                <Text 
                  color='gray.700'
                  fontWeight='medium'
                  fontSize='1.1rem'
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
                  fontSize='3rem'
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
                  Resumen de Pagos - <Link to='/pagos'>Ver más</Link>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{nCuentatercero} - {nombretercero}
                  <br/>
                  {describcion}
                  <br/>
                  <Text className='monto'>
                  ${montoTransfer}
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>{nCuentatercero} - {nombretercero}
                  <br/>
                  {describcion}
                  <br/>
                  <Text className='monto'>
                  ${montoTransfer}
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>{nCuentatercero} - {nombretercero}
                  <br/>
                  {describcion}
                  <br/>
                  <Text className='monto'>
                  ${montoTransfer}
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>{nCuentatercero} - {nombretercero}
                  <br/>
                  {describcion}
                  <br/>
                  <Text className='monto'>
                  ${montoTransfer}
                  </Text>
                </Td>
              </Tr>
              <Tr>
                <Td>{nCuentatercero} - {nombretercero}
                  <br/>
                  {describcion}
                  <br/>
                  <Text className='monto'>
                    ${montoTransfer}
                  </Text>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
    </>
  )
}