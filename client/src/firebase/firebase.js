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

// reference from test project setup
// var config = {
//   apiKey: "AIzaSyBsHaY9CxiJ1F37ZDs5_p4GZOvAzAKvMY8",
//   authDomain: "react-firebase-auth-test.firebaseapp.com",
//   databaseURL: "https://react-firebase-auth-test.firebaseio.com",
//   projectId: "react-firebase-auth-test",
//   storageBucket: "react-firebase-auth-test.appspot.com",
//   messagingSenderId: "508135260109"
// };
