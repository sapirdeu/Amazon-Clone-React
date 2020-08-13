import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCouYSutNYOlhsqZSJ6bfmgO_ANhwrLIy8",
    authDomain: "clone-react-5ebc5.firebaseapp.com",
    databaseURL: "https://clone-react-5ebc5.firebaseio.com",
    projectId: "clone-react-5ebc5",
    storageBucket: "clone-react-5ebc5.appspot.com",
    messagingSenderId: "1056328986164",
    appId: "1:1056328986164:web:8d76a0f3dc89afa38b2461",
    measurementId: "G-PVKKMPLT9S"
});

const auth = firebase.auth();

export { auth };
