import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { 
    getFirestore, 
    collection,
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where, 
    setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROYECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();

export async function registerNewUser(user) {
    try {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, user.uid), user);
    } catch (e) {
      console.error("Error adding document: ", e);
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
    console.log(user);
    try {
      const usersRef = collection(db, "users");
      await setDoc(doc(usersRef, user.uid), user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

export async function fetchLinkData(uid) {
    const links = [];
    const q = query(collection(db, "links"), where("uid", "==", uid));
  
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const link = { ...doc.data() };
      link.docId = doc.id;
      //console.log(doc.id, " => ", doc.data());
      console.log(link);
      links.push(link);
    });
    return links;
  }

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

// export async function userExists(uid){
//     const docRef = doc(db, "users", uid);
//     const res = await getDoc(docRef);
//     console.log(res);

//     return res.exists();
// }

// export async function existsUsername(username){
//     const users = [];
//     const docsRef = collection(db, users);
//     const q = query(docsRef, where('username', '==', username));

//     const querySnapshot = await getDocs(q);

//     querySnapshot.forEach(doc => {
//         users.push(doc.data());
//     });

//     return users.length > 0 ? users[0].uid : null;
// }

// export async function registerNewUser(user){
//     try {
//         const colletionRef = collection(db, 'users');
//         const docRef = doc(colletionRef, user.uid);
//         await setDoc(docRef, user);
//     } catch (error) {
        
//     }
// }

// export async function updateUser(user){
//     try {
//         const colletionRef = collection(db, 'users');
//         const docRef = doc(colletionRef, user.uid);
//         await setDoc(docRef, user);
//     } catch (error) {
        
//     }
// }

// export async function getUserInfo(uid){
//     try {
//         const docRef = doc(db, 'users', uid);
//         const document = await getDoc(docRef);
//         return document.data;
//     } catch (error) {
        
//     }
// }

