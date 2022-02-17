import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd_NDXxOE5SCzOgRpj5Z6RDYeCg8LHy4E",
  authDomain: "vue-auth-f542b.firebaseapp.com",
  projectId: "vue-auth-f542b",
  storageBucket: "vue-auth-f542b.appspot.com",
  messagingSenderId: "5396919625",
  appId: "1:5396919625:web:f0a4613c1b0ebc1c485698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}