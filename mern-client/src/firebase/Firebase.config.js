// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAb-4CTX5NZw9O9r96Z5ETSEnjJb_3Src",
  authDomain: "mern-9389f.firebaseapp.com",
  projectId: "mern-9389f",
  storageBucket: "mern-9389f.appspot.com",
  messagingSenderId: "1080876961765",
  appId: "1:1080876961765:web:cd0dee128d39d7658fe90c",
  measurementId: "G-0BN48BW0Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;