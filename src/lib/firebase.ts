// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvcMTcDK-zRUSBDtOfg_Fwx7oFDndAPNE",
    authDomain: "wanda-262f1.firebaseapp.com",
    projectId: "wanda-262f1",
    storageBucket: "wanda-262f1.firebasestorage.app",
    messagingSenderId: "807566996136",
    appId: "1:807566996136:web:49c3e82c7bf1054265089d",
    measurementId: "G-KDCEQF9HGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };