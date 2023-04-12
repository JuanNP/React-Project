import { Container, Heading } from "@chakra-ui/react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import "./beneficiarios.css";

export const Beneficiarios = () => {
  return (
    <>
      <Container maxWidth='100%' mt='30px' mb='20px' centerContent>
        <Box className='card'>
          <Heading className='title'>Crear beneficiario</Heading>
          <Box className='container'>
            <Box className='div'>
              <Text className='label'>Cuenta o Contrato</Text>
              <Input className='input' placeholder='Numero de cuenta' />
            </Box>
            <Box className='div'>
              <Text className='label'>Cedula</Text>
              <Input className='input' placeholder='Cedula del beneficiario' />
            </Box>
            <Box className='div'>
              <Text className='label'>Alias</Text>
              <Input className='input' placeholder='Alias del beneficiario' />
            </Box>
            <Box className='div'>
              <Text className='label'>Correo electronico</Text>
              <Input className='input' placeholder='Correo electronico del beneficiario' />
            </Box>
            <Button className='btn'>Guardar</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
} 