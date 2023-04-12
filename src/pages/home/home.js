import React from 'react'
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

export const Home = () => {

  const navigate = useNavigate();

  const nCuenta = '1234567890'
  const saldo = '100000000'
  const tipoCuenta = 'Cuenta de ahorros'
  const nCuentatercero = '0987654321'
  const nombretercero = 'Juan Perez'
  const describcion = 'Pago de servicios'
  const montoTransfer = '100000'

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