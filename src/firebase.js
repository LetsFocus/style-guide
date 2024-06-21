import firebase from 'firebase/compat/app';  // Import the compat version for now
import 'firebase/compat/auth';  // Import auth module for authentication
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAA9Q2Pi_bHbYFDvLjxi0qISiVIFIFfo1E",
    authDomain: "guidelines-54d83.firebaseapp.com",
    projectId: "guidelines-54d83",
    storageBucket: "guidelines-54d83.appspot.com",
    messagingSenderId: "824291850520",
    appId: "1:824291850520:web:77141a27d843ebab93c66d",
    measurementId: "G-G23WJYGHVZ"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = app.auth()

export {auth,db,app};




