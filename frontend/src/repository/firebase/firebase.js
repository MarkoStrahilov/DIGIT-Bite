// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4UypH-HZW79_FQXrCEhuzDAw9b4qseyM",
    authDomain: "digit-bite.firebaseapp.com",
    projectId: "digit-bite",
    storageBucket: "digit-bite.appspot.com",
    messagingSenderId: "842495142730",
    appId: "1:842495142730:web:c22e2bbd3cffd2ac4fafb3",
    measurementId: "G-EDCHHYHQ75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);