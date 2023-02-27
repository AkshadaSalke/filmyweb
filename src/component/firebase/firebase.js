import { initializeApp } from "firebase/app";
import { getFirestore, collection} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiROr5oXVPWUnL4ZsTTmldQJ7scANVbZg",
  authDomain: "filmyweb-c6523.firebaseapp.com",
  projectId: "filmyweb-c6523",
  storageBucket: "filmyweb-c6523.appspot.com",
  messagingSenderId: "404274353995",
  appId: "1:404274353995:web:6295c8fec466913046bace"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef = collection(db, "movies");

export default app;