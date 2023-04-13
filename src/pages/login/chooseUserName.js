import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate,Link, } from "react-router-dom";
import {
    auth,
    existsUsername,
    getUserInfo,
    updateUser,
    userExists,
    updateItem,
  } from "../../firebase/firebase";

/*
  Stages:
  0: initiated
  1: loading
  2: login completed
  3: login but no username
  4: not logged
  5: username exists
  6: username correct
*/

export default function ChooseUserName(){

    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserId, setCurrentUserId] = useState(0);
    const [currentCedula, setCurrentCedula] = useState(null);

    
    const [state, setState] = useState(0);
    let navigate = useNavigate();

    useEffect(() => {
        setState(1);
        onAuthStateChanged(auth, callBackAuthState);
      }, []);

    async function callBackAuthState(user) {
        if (user) {
          const uid = user.uid;
          console.log(user);
          if (userExists(user.uid)) {
            const loggedUser = await getUserInfo(uid);
            setCurrentUser(loggedUser);
            setCurrentUserId(loggedUser.uid)
            if (!loggedUser.processCompleted) {
              setState(3);
              //console.log("Falta username");
              //console.log(currentUserId);
            } else {
              //console.log("Ya tiene username", state);
              navigate("/dashboard");
            }
          } else {
            navigate("/login");
          }
        }
    }
    
    function handleInputUsername(e) {
        const tmpUser = currentUser;
        const value = e.target.value;
        tmpUser.username = value;
        setCurrentUser({ ...tmpUser });
    }

    async function handleOnClickContinue() {
        if (currentUser.username !== "") {
          const exists = await existsUsername(currentUser.username);
          if (exists) {
            setState(5);
          } else {
            const tmpUser = currentUser;
            tmpUser.processCompleted = true;
            await updateUser(tmpUser);
            await updateItem(currentUserId, currentCedula);
            console.log("Cedula capturada " + currentCedula); 
            console.log("User ID " + currentUserId);
            setState(6);
          }
        }
    }
    
    if (state === 6) {
        return (
          <div>
            <h1>Felicidades, precione el boton debajo para ir al dashboard</h1>
    
            <Link to="/dashboard">Continuar</Link>
          </div>
        );
    }

    if(state === 3){
       return (
            <div> 
            <h1>Bienvenido {currentUser.displayName}, Para terminar el proceso introduce un nombre de usuario</h1>

            <div>
                <input type="text" onInput={handleInputUsername} />
            </div>

            <div>
                <p>Introduzca su cedula</p>
                <input type="text" onChange={e => setCurrentCedula(e.target.value)} />
            </div>

            <div>
                <button onClick={handleOnClickContinue}>Finalizar</button>
            </div>
        </div>
       );
    }

    return (
        <div>loading...</div>
    );

}

