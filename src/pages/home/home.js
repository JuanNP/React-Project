import React from 'react'
import './home.css'
import { Box, Container, Stat, Text, Heading, Button, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
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

export const Home = () => {

  const navigate = useNavigate();

  const nCuenta = '1234567890'
  const saldo = '100000000'
  const tipoCuenta = 'Cuenta de ahorros'

  return (
    <>
    <Container maxWidth='100%' mt='55px' centerContent>
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

        <TableContainer className='tablaContainer' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' bg='white' mt='100px'>
          <Table className='tabla'>
            <Thead>
              <Tr>
                <Th>descripción</Th>
                <Th>cuenta</Th>
                <Th>fecha</Th>
                <Th>monto</Th>
                <Th>estado</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Esta es una descripción de prueba para ver como se ve en la tabla</Td>
                <Td>1234567890</Td>
                <Td>2021-05-01</Td>
                <Td isNumeric>100000</Td>
                <Td>Exitosa</Td>
              </Tr>
              <Tr>
                <Td>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Td>
                <Td>1234567890</Td>
                <Td>2021-05-01</Td>
                <Td isNumeric>100000</Td>
                <Td>Exitosa</Td>
              </Tr>
              <Tr>
                <Td>tercera prueba para ver como se ve en la tabla de transferencias</Td>
                <Td>1234567890</Td>
                <Td>2021-05-01</Td>
                <Td isNumeric>100000</Td>
                <Td>Exitosa</Td>
              </Tr>
              <Tr>
                <Td>Cuarta prueba para ver como se ve en la tabla de transferencias</Td>
                <Td>1234567890</Td>
                <Td>2021-05-01</Td>
                <Td isNumeric>100000</Td>
                <Td>Exitosa</Td>
              </Tr>
              <Tr>
                <Td>Quinta prueba para ver como se ve en la tabla de transferencias</Td>
                <Td>1234567890</Td>
                <Td>2021-05-01</Td>
                <Td isNumeric>100000</Td>
                <Td>Exitosa</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
    </>
  )
}