import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9cOdWKZwQYmmaSfzXo_RYe5QHIRz5NMI",
    authDomain: "e-commerce-65776.firebaseapp.com",
    databaseURL: "https://e-commerce-65776.firebaseio.com",
    projectId: "e-commerce-65776",
    storageBucket: "e-commerce-65776.appspot.com",
    messagingSenderId: "458585180453",
    appId: "1:458585180453:web:7803614614a56c70aef2cc",
    measurementId: "G-NRZM29Y7WD"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };