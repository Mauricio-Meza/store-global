import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAjUgP8IbnsJAojuGSzg4uJ-we4zGblGQ",
  authDomain: "store-global-b0f10.firebaseapp.com",
  projectId: "store-global-b0f10",
  storageBucket: "store-global-b0f10.firebasestorage.app",
  messagingSenderId: "432876064390",
  appId: "1:432876064390:web:3fdec176ca173d5137cb07"
};

const App = initializeFirebase(firebaseConfig);
export const Auth = getAuth(App);



