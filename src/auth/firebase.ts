import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGujKrzqNCkfOltXXb74xbMKU1-gugFB8",
  authDomain: "hms-gannwheel-83fe4.firebaseapp.com",
  projectId: "hms-gannwheel-83fe4",
  storageBucket: "hms-gannwheel-83fe4.firebasestorage.app",
  messagingSenderId: "1045738588698",
  appId: "1:1045738588698:web:493ae9ceae2f661d40dfa3",
  measurementId: "G-Y5NLVSYJEC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();