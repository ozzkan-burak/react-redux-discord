import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDj-1kjcLA9qM3oF8R8EFqz9KylFiFYTYQ",
  authDomain: "discord-3dc8b.firebaseapp.com",
  projectId: "discord-3dc8b",
  storageBucket: "discord-3dc8b.appspot.com",
  messagingSenderId: "33296781295",
  appId: "1:33296781295:web:41a45888bc3c82ee47701a"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};