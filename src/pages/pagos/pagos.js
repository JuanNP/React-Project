import { Box, Container } from "@chakra-ui/react";
import './pagos.css' 
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text } from "@chakra-ui/react";

export const Pagos = () => {

  const nCuentatercero = '1234567890';
  const nombretercero = 'Juan Perez';
  const describcion = 'Pago de servicios';
  const monto = '100.000';

  return (
    <>
      <Container className='main' maxWidth='100%' centerContent>
        <Box className='contenedor'>
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
                    ${monto}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{nCuentatercero} - {nombretercero}
                    <br/>
                    {describcion}
                    <br/>
                    <Text className='monto'>
                    ${monto}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{nCuentatercero} - {nombretercero}
                    <br/>
                    {describcion}
                    <br/>
                    <Text className='monto'>
                    ${monto}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{nCuentatercero} - {nombretercero}
                    <br/>
                    {describcion}
                    <br/>
                    <Text className='monto'>
                    ${monto}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{nCuentatercero} - {nombretercero}
                    <br/>
                    {describcion}
                    <br/>
                    <Text className='monto'>
                      ${monto}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{nCuentatercero} - {nombretercero}
                    <br/>
                    {describcion}
                    <br/>
                    <Text className='monto'>
                      ${monto}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{nCuentatercero} - {nombretercero}
                    <br/>
                    {describcion}
                    <br/>
                    <Text className='monto'>
                      ${monto}
                    </Text>
                  </Td>
                </Tr>
                <Tr>
                  <Td>{nCuentatercero} - {nombretercero}
                    <br/>
                    {describcion}
                    <br/>
                    <Text className='monto'>
                      ${monto}
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