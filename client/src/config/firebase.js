
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging'

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
export const messaging = getMessaging(app);

// function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');

//       getToken(messaging, { vapidKey: 'BO6L1QNjM1ZshA5CvXqEC7XxfIdzGyBZfV6iTQzpL69f3uiT4oIVIbZgCXr5LruMlB76VR-zZscGcH7m_3PbVPM' }).then((currentToken) => {
//         if (currentToken) {
//           console.log('currentToken', currentToken)
//         } else {
//           console.log('No registration token available. Request permission to generate one.');
//         }
//       }).catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//       });

//     } else {
//       console.log('Permission not granted')
//     }
//   })
// }

// requestPermission();
