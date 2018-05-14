import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCLmZJ0QVtJDZJTtQVQ1fqTbj547GlahHE",
  authDomain: "lfg-project3.firebaseapp.com",
  databaseURL: "https://lfg-project3.firebaseio.com",
  projectId: "lfg-project3",
  storageBucket: "",
  messagingSenderId: "1060807416330"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
