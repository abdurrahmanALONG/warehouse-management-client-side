// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

apiKey:"AIzaSyDbAmQfvZmCwp1nuQaDnmybO0eFZdG-9rw",
authDomain:"assignment-11-84320.firebaseapp.com",
projectId:"assignment-11-84320",
storageBucket:"assignment-11-84320.appspot.com",
messagingSenderId:"648176919503",
appId:"1:648176919503:web:818fa7721f1913bb3968ba",
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_rojectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;