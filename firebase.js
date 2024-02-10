// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkWd4kQgfbjie7wqREXrRxrT8JrKCGHTk",
  authDomain: "gratisindexmobile-b45a1.firebaseapp.com",
  projectId: "gratisindexmobile-b45a1",
  storageBucket: "gratisindexmobile-b45a1.appspot.com",
  messagingSenderId: "66425356078",
  appId: "1:66425356078:web:f29829c685b6a5b325c4bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const storage = getStorage(app)
const db = getFirestore(app);
export {auth}
export {db}
export {storage}