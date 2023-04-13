import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, updateProfile  } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { 
    getFirestore, 
    collection,
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where, 
    setDoc,
    updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROYECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

//#region Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
//#endregion 

export async function registerNewUser(user) {
    try {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, user.uid), user);
      console.log("El id de este documento es: " + user.uid);
    } catch (e) {
      console.error("Error al añadir el documento: ", e);
    }
}

export async function getUserInfo(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }

export async function userExists(uid) {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  }

export async function updateUser(user) {
  try {
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef, user.uid), user);
  } catch (e) {
    console.error("Error al añadir el documento: ", e);
  }
}

export async function updateItem(uid, cedula){
  const usersRef = doc(db, "users", uid);
  await updateDoc(usersRef, {
    cedula: cedula,
  });

  //#region Codigo de prueba
    // ----------------------------------------------------------------
    //              Funciona pero sobreescribe el documento
    // const docRef = doc(db, "users", uid);
    // const payload = { cedula };
    // setDoc(docRef, payload);
    // ----------------------------------------------------------------

    // const q = query(collection(db, "users"), where("uid", "==", uid));
    // const querySnapshot = await getDoc(q);

    // await updateDoc(querySnapshot, {
    //   cedula: cedula,
    // })
    // .then(() => {
    //   console.log("Documento actualizado correctamente");
    // })
    // .catch((error) => {
    //   console.error("Error al actualizar el documento: ", error);
    // });

    // const usersRef = collection(db, "users").doc("5JVJXkA5aENm9a34IVrAlAYUG4M2");
    // const docSnap = await getDoc(usersRef);
    // await updateDoc(docSnap, {
    //   cedula: cedula
    // });
    //#endregion
    
}

// export async function fetchLinkData(uid) {
//     const links = [];
//     const q = query(collection(db, "links"), where("uid", "==", uid));
  
//     const querySnapshot = await getDocs(q);
  
//     querySnapshot.forEach((doc) => {
//       const link = { ...doc.data() };
//       link.docId = doc.id;
//       console.log(link);
//       links.push(link);
//     });
//     return links;
// }

  export async function existsUsername(username) {
    const users = [];
    const q = query(collection(db, "users"), where("username", "==", username));
  
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      users.push(doc.data());
    });
    return users.length > 0 ? users[0].uid : null;
  }

  export async function logout() {
    await auth.signOut();
  }

