import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyATgYtWXEGM1bLKHBRQ11v_Nsz-mt62uXg",
    authDomain: "disney-clone-yt-76129.firebaseapp.com",
    projectId: "disney-clone-yt-76129",
    storageBucket: "disney-clone-yt-76129.appspot.com",
    messagingSenderId: "1040096482982",
    appId: "1:1040096482982:web:938e4422f1aabe95844667",
    measurementId: "G-8TBWH81PSW"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };