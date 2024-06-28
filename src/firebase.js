import firebase from 'firebase/compat/app';  // Import the compat version for now
import 'firebase/compat/auth';  // Import auth module for authentication
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain:process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = app.auth()

export {auth,db,app};




