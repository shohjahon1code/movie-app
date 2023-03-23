import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXV2gWTaBNsVlb_hvmRPYifvXyt131dvc",
  authDomain: "shoh-app.firebaseapp.com",
  projectId: "shoh-app",
  storageBucket: "shoh-app.appspot.com",
  messagingSenderId: "318925867545",
  appId: "1:318925867545:web:bed073511abf2a39363888",
  measurementId: "G-M7RNFDXQHG",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
