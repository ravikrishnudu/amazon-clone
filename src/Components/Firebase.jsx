import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCa7WsypRhuWh3rLMgrkiW-xrNmQQliSkI",
  authDomain: "clone-ddbf5.firebaseapp.com",
  projectId: "clone-ddbf5",
  storageBucket: "clone-ddbf5.appspot.com",
  messagingSenderId: "166012993797",
  appId: "1:166012993797:web:ae41d80bb7e5780cc7776c",
  measurementId: "G-N6V94M2D8H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };