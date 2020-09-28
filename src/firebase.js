import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJc32g8ltHWgBFT96hQrv3BTXf4NPdCrY",
    authDomain: "ecommerce-1bb44.firebaseapp.com",
    databaseURL: "https://ecommerce-1bb44.firebaseio.com",
    projectId: "ecommerce-1bb44",
    storageBucket: "ecommerce-1bb44.appspot.com",
    messagingSenderId: "82055984354",
    appId: "1:82055984354:web:27f8260da892f496e29abb",
    measurementId: "G-JR9ZDLD222"
});


//const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth};