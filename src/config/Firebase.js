import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-jSkcGAtvyn_Aut6OfWDRQDwtgNJq1o0",
  authDomain: "outcastmedia-c45e0.firebaseapp.com",
  projectId: "outcastmedia-c45e0",
  storageBucket: "outcastmedia-c45e0.appspot.com",
  messagingSenderId: "1002570922517",
  appId: "1:1002570922517:web:a31f02e311f0622d6f2c1c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
