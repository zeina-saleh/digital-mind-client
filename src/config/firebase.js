
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPJjQOB4a4fNKQL1zvetWVrG1nQsS-0Wc",
  authDomain: "digital-mind-59d90.firebaseapp.com",
  projectId: "digital-mind-59d90",
  storageBucket: "digital-mind-59d90.appspot.com",
  messagingSenderId: "544865937046",
  appId: "1:544865937046:web:5b060bcacf1291209004b7"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);