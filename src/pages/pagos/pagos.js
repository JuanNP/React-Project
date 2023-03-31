import { Box, Container } from "@chakra-ui/react";
import './pagos.css' 
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text } from "@chakra-ui/react";

export const Pagos = () => {

  const nCuentatercero = '123456789';
  const nombretercero = 'Juan Perez';
  const describcion = 'Pago de servicios';
  const montoTransfer = '100.000';

  return (
    <>
      <Container maxWidth='100%' mt='20px' mb='20px' centerContent>
      <Box className='contenedor'>
          <h1>Pagos</h1>
          <TableContainer className='tablaContainer' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' bg='white'>
            <Table className='tabla'>
              <Thead>
                <Tr>
                  <Th>Pagos</Th>
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
  );
}