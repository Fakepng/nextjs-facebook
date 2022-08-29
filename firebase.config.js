import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCQCSgIHoU0Ju2h5J8RqoZGOG4IZFtDisE",
    authDomain: "nextjs-facebook-31cd2.firebaseapp.com",
    projectId: "nextjs-facebook-31cd2",
    storageBucket: "nextjs-facebook-31cd2.appspot.com",
    messagingSenderId: "660779418583",
    appId: "1:660779418583:web:8f104e65660a2a46444192",
    measurementId: "G-NKPTY0MMF8"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { firebase, db, storage };