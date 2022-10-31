import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDFZxc52kFtlsi5LT6mOtrNTC5qfPmx0Kw",
  authDomain: "reinabatata-d7990.firebaseapp.com",
  projectId: "reinabatata-d7990",
  storageBucket: "reinabatata-d7990.appspot.com",
  messagingSenderId: "658756128436",
  appId: "1:658756128436:web:954ceed84492a795a491e1"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)