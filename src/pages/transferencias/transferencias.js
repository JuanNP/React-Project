import React from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getUserInfo } from '../../firebase/firebase';
import { useEffect, useState } from 'react';
import { Container, Box, Input, Textarea, Button, NumberInput, Text, NumberInputField, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import './transferencias.css' 

export const Transferencias = () => {

  const [currentUserNumeroCuenta, setCurrentUserNumeroCuenta] = useState(null);
  const [currentUserSaldo, setCurrentUserSaldo] = useState(null);
  const [currentUserTipoCuenta, setCurrentUserTipoCuenta] = useState(null);

  const navigate = useNavigate();

  const nCuenta = currentUserNumeroCuenta;
  const saldo = currentUserSaldo;
  const tipoCuenta = currentUserTipoCuenta;

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

  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, '')

  const [value, setValue] = React.useState('0')

  return (
    <>
      <Container maxWidth='100%' mt='30px' mb='20px' centerContent>
        <Box className='card'>
          <Box className='container'>
            <Box className='div'>
              <Text className='label'>Numero de cuenta</Text>
              <Input className='input' placeholder='Numero de cuenta' />
            </Box>
            <Box className='div'>
              <Text className='label'>Nombre del beneficiario</Text>
              <Input className='input' placeholder='Nombre del beneficiario' />
            </Box>
            <Box className='div'>
              <Text className='label'>Monto a transferir</Text>
              <NumberInput className='input' min={0} max={saldo} onChange={(valueString) => setValue(parse(valueString))} value={format(value)}>
                <NumberInputField />
              </NumberInput>
            </Box>
            <Box className='div'>
              <Stat>
                <StatLabel className='label' >Balance disponible:</StatLabel>
                <StatNumber>${saldo}</StatNumber>
              </Stat>
            </Box>
            <Box className='div'>
              <Text className='label'>Comentario(Opcional)</Text>
              <Textarea className='textarea' placeholder='Comentario...' />
            </Box>
          </Box>
          <Button className="btn">Transferir</Button>
        </Box>
      </Container>
    </>
  );
}