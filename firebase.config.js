import firebase, { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCQCSgIHoU0Ju2h5J8RqoZGOG4IZFtDisE",
    authDomain: "nextjs-facebook-31cd2.firebaseapp.com",
    projectId: "nextjs-facebook-31cd2",
    storageBucket: "nextjs-facebook-31cd2.appspot.com",
    messagingSenderId: "660779418583",
    appId: "1:660779418583:web:8f104e65660a2a46444192",
    measurementId: "G-NKPTY0MMF8"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };