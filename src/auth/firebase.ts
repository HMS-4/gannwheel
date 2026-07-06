import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXBsAKRhpNzzShrTjwMRDxHOMvD9tvpg4",
  authDomain: "hms-gannwheel.firebaseapp.com",
  projectId: "hms-gannwheel",
  storageBucket: "hms-gannwheel.firebasestorage.app",
  messagingSenderId: "1034932061564",
  appId: "1:1034932061564:web:e184d95e1e287d6abdd0f9",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();