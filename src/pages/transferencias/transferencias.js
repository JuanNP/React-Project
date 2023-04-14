import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  auth, 
  getUserInfo, 
  db,
  registerTransactionHistory, 
} from '../../firebase/firebase';
import { useEffect, useState } from 'react';
import { Container, Box, Input, Textarea, Button, NumberInput, Text, NumberInputField, Stat, StatLabel, StatNumber, Select } from "@chakra-ui/react";
import './transferencias.css' 
import { 
  onSnapshot, 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc,
  serverTimestamp, 
} from "firebase/firestore";
import Swal from 'sweetalert2';

export const Transferencias = () => {
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  //Se almacena el saldo del cliente logeado
  const [currentUserSaldo, setCurrentUserSaldo] = useState("");
  //se almacena el correo del usuario logeado
  const [currentUserCorreo, setCurrentUserCorreo] = useState(null);
  //numero de cuenta usuario logeado
  const [currentUserNumeroCuenta, setCurrentUserNumeroCuenta] = useState(null);
  //Uid del usuario seleccionado al cual se le hara la transferencia
  const [uidDestinatario, setUidDestinatario] = useState("");
  //Lista de todos los documentos
  const [infoDocList, setInfoDocList] = useState([{ name: "", id: "" }]);
  //Se guarda el comentario 
  const [userComment, setUserComment] = useState("");
  //Saldo del usuario logeado
  const saldo = currentUserSaldo;
  //Uid del usuario logeado
  const [userUid, setUserUid] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, callBackAuthState);
      //Traer todos los documentos de la collection con query que no sea el usuario loggeado
      if(currentUserCorreo){
        const collectionRef = collection(db, "users");
        const q = query(collectionRef, where("correo", "!=", currentUserCorreo));
        
        const unsub = onSnapshot(q, (snapshot) =>
          setInfoDocList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));
        
        return unsub;
      }
              //traer todos los documentos de la collection
    // onSnapshot(collection(db, "users"), (snapshot) =>
    //   setInfoDocList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))));

  }, [currentUserCorreo]);

  async function callBackAuthState(user){
    if(user){

      //#region Usuario loggeado
      //uid del usuario loggeado
      const uid = user.uid;
      //se guarda toda la info del usuario loggeado
      const loggedUser = await getUserInfo(uid);
      //correo del usuario loggeado
      const correo = loggedUser.correo;
      //numero de cuenta usuario logeado
      const nc = loggedUser.numeroCuenta;  
      //#endregion 

      setUserUid(loggedUser.uid);
      setCurrentUserSaldo(loggedUser.saldo);
      setCurrentUserCorreo(correo);
      setCurrentUserNumeroCuenta(nc);
    }
  }

  function handleChange (event){
    setUidDestinatario(event.target.value);
  }

  const format = (val) => `$` + val
  const parse = (val) => val.replace(/^\$/, '')

  //Se almacena el dinero que se va a querer transferir
  const [value, setDineroTransfer] = React.useState('0')

  //value es el dinero a transferir,
      //value se le restara del saldo de quien envia y se sumara al saldo de quien recibira
  //currentUserSaldo es el saldo disponible que tiene el que envia
  //userComment el comentario que se quisiese añadir,
  //uidDestinatario se captura el uid del destinatario,
  //userUid se captura el uid de quien envia 

  return (
    <>
      <Container className='main' maxWidth='100%' mt='30px' mb='20px' centerContent>
        <Box className='card'>
          <Box className='container'>

            <Box className='div'>
              {/* <Text className='label'>Numero de cuenta</Text>
              <Input className='input' placeholder='Numero de cuenta' /> */}
              
                      {/* Obtener todos los numeros de cuenta  */}
              <Text className='label'>Destinatario</Text>
              <Select value={uidDestinatario} placeholder="Elije a quien le quieres enviar dinero" onChange={handleChange} isRequired>
                {infoDocList.map((info) => (
                  <option value={info.uid} key={info.uid}>{info.correo}</option>
                )) 
                }
              </Select>
            </Box>

            <Box className='div'>
              {/* <Text className='label'>Nombre del beneficiario</Text>
              <Input className='input' placeholder='Nombre del beneficiario' /> */}
            </Box>

            <Box className='div'>
              <Text className='label'>Monto a transferir</Text>
              <NumberInput className='input' min={0} max={saldo} onChange={(valueString) => setDineroTransfer(parse(valueString))} value={format(value)}>
                <NumberInputField />
              </NumberInput>
            </Box>
            <Box className='div'>
              <Stat>
                <StatLabel className='label' >Balance disponible:</StatLabel>
                <StatNumber>${currentUserSaldo}</StatNumber>
              </Stat>
            </Box>
            <Box className='div'>
              <Text className='label'>Comentario(Opcional)</Text>
              <Textarea className='textarea' placeholder='Comentario...' onChange={e => setUserComment(e.target.value)}/>
            </Box>
          </Box>
          <Button className="btn" onClick={handleOnClickTransferMoney}>Transferir</Button>
        </Box>
      </Container>
    </>
  );

  async function handleOnClickTransferMoney() {

    if(uidDestinatario && value > 0) {

      Toast.fire({
        icon: 'success',
        title: 'Transferencia exitosa'
      });
      //#region usuario loggeado
      //Actualiza el saldo de quien envia el dinero 
      const usersRefEnvia = doc(db, "users", userUid);
        await updateDoc(usersRefEnvia, {
        saldo: +currentUserSaldo- +value,
      });
      //#endregion

      //#region Usuario Destinatario
      //Obtener el saldo actual de quien recibira el dinero
      let destiDatos = await getUserInfo(uidDestinatario);

      //Actualiza el saldo de quien recibira dinero
      const usersRefRecibe = doc(db, "users", uidDestinatario);
      await updateDoc(usersRefRecibe, {
      saldo: +destiDatos.saldo+ +value
      });
      //#endregion

    await registerTransactionHistory({
      envia: currentUserCorreo,
      enviaUid: userUid,
      enviaNumCuenta: currentUserNumeroCuenta,
      recibe: destiDatos.correo,
      recibeUid: uidDestinatario,
      recibeNumCuenta: destiDatos.numeroCuenta,
      comentario: userComment,
      cantida: value,
      fecha_realizada: serverTimestamp(),
    });

    navigate("/dashboard");

    }else{
      Toast.fire({
        icon: 'error',
        title: 'Debe llenar todos los campos'
      });
    }
  }

}
