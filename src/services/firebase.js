import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD83sOvpHS_WkYMar68OKFTL-yR3ibnEa0",
    authDomain: "chat-app-a07f9.firebaseapp.com",
    projectId: "chat-app-a07f9",
    storageBucket: "chat-app-a07f9.appspot.com",
    messagingSenderId: "197239710154",
    appId: "1:197239710154:web:9d4299848279355926af33"
}

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };