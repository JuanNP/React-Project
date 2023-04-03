import React from 'react';
import { Container, Box, Input, Textarea, Button, NumberInput, Text, NumberInputField, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import './transferencias.css' 

export const Transferencias = () => {

  const nBalance = '1000.00';

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
              <NumberInput className='input' min={0} max={nBalance} onChange={(valueString) => setValue(parse(valueString))} value={format(value)}>
                <NumberInputField />
              </NumberInput>
            </Box>
            <Box className='div'>
              <Stat>
                <StatLabel className='label' >Balance disponible:</StatLabel>
                <StatNumber>${nBalance}</StatNumber>
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