// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8YHi8dgxIYMYSakPDT7NzXMkQyAdnqd0",
  authDomain: "breking-news-73d94.firebaseapp.com",
  projectId: "breking-news-73d94",
  storageBucket: "breking-news-73d94.appspot.com",
  messagingSenderId: "1069485148469",
  appId: "1:1069485148469:web:d9a5d0f6b3df4e9310a47c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
