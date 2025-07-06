// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCKmKqZA2kPBtOuz6DCH-mJ_AzXhx546nY",
    authDomain: "wa-auth-3b39d.firebaseapp.com",
    projectId: "wa-auth-3b39d",
    storageBucket: "wa-auth-3b39d.firebasestorage.app",
    messagingSenderId: "1073667664022",
    appId: "1:1073667664022:web:6db6d2daa8796d75ec3ab7",
    measurementId: "G-JQ6YY5KWZM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
