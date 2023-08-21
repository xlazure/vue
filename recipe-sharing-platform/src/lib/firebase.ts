import { FirebaseApp, initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcHSCqpwRupfkwzXSQVIDIlkykoKqNQVU",
  authDomain: "recipe-sharing-platform-2dc73.firebaseapp.com",
  projectId: "recipe-sharing-platform-2dc73",
  storageBucket: "recipe-sharing-platform-2dc73.appspot.com",
  messagingSenderId: "660926264279",
  appId: "1:660926264279:web:197969421b0b72d6e6d192",
  measurementId: "G-YP15X06PVR"
};


console.log('firebase');

const app: FirebaseApp = initializeApp(firebaseConfig)
export const db: any = getFirestore(app)

export default app