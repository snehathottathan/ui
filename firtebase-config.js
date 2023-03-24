// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgbN7jLJYnDEGaR0PR2A1pC9tWxDS3shI",
  authDomain: "ui-project-d4321.firebaseapp.com",
  projectId: "ui-project-d4321",
  storageBucket: "ui-project-d4321.appspot.com",
  messagingSenderId: "321075846467",
  appId: "1:321075846467:web:fa5dc759aa18bf9c52a3f6",
  measurementId: "G-TYX4JQT99R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);