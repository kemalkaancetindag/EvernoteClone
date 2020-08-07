import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDAQgFtchhDpl4Fv1SdY6uajG8rC2SNaXo",
  authDomain: "evernote-clone-31ec2.firebaseapp.com",
  databaseURL: "https://evernote-clone-31ec2.firebaseio.com",
  projectId: "evernote-clone-31ec2",
  storageBucket: "evernote-clone-31ec2.appspot.com",
  messagingSenderId: "1039641464742",
  appId: "1:1039641464742:web:a278441ca7d3264c2d8967",
  measurementId: "G-DZQQ9LYVCL",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
