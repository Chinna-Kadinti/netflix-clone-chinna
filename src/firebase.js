import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHhANw2cGQ24QfXoZaRJ1O083vZCu4LWc",
    authDomain: "netflix-clone-chinna.firebaseapp.com",
    projectId: "netflix-clone-chinna",
    storageBucket: "netflix-clone-chinna.appspot.com",
    messagingSenderId: "576403492172",
    appId: "1:576403492172:web:4bf3d0847f08581a2913e9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;