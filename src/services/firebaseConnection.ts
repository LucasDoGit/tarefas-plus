import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4PAt4M4xPKXvteGl-QroTnzs4jcn9Ivg",
    authDomain: "curso-c10ae.firebaseapp.com",
    projectId: "curso-c10ae",
    storageBucket: "curso-c10ae.appspot.com",
    messagingSenderId: "69509534883",
    appId: "1:69509534883:web:cb33913b1bb55ecee39b16",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };