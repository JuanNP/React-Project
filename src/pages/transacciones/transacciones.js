import { Box, Container } from "@chakra-ui/react";
import './transacciones.css' 
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, getUserInfo } from "../../firebase/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export const Transacciones = () => {

  const [currentUserNumeroCuenta, setCurrentUserNumeroCuenta] = useState(null);
  const nCuenta = currentUserNumeroCuenta;

  const [infoDocList, setInfoDocList] = useState([{ name: "", id: "" }]);
  const [infoDocListRecibe, setInfoDocListRecibe] = useState([{ name: "", id: "" }]);

  useEffect(() => {
    onAuthStateChanged(auth, callBackAuthState);

    if(nCuenta){
      const collectionRef = collection(db, "transacciones");
      const q = query(collectionRef, where("recibeNumCuenta", "==", nCuenta));
      
      const unsub = onSnapshot(q, (snapshot) =>
        setInfoDocListRecibe(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
      
      return unsub;
    }
  }, [nCuenta]);

  async function callBackAuthState(user){
    if(user){
      const uid = user.uid;
      const loggedUser = await getUserInfo(uid);
  
      setCurrentUserNumeroCuenta(loggedUser.numeroCuenta);

      if(nCuenta){
      const collectionRef = collection(db, "transacciones");
      const q = query(collectionRef, where("enviaNumCuenta", "==", nCuenta));
      
      const unsub = onSnapshot(q, (snapshot) =>
        setInfoDocList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
      
      return unsub;
    }
    }
  }

  return (
    <>
      <Container className='main' maxWidth='100%' centerContent>
        <Box className='transacciones-contenedor'>
          <TableContainer className='tablaContainer' borderRadius='10' borderStyle='solid' borderWidth='1px' borderColor='lightgrey' bg='white'>
            <Table className='tabla'>
              <Thead>
                <Tr>
                  <Th>Transacciones</Th>
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
  );

}
