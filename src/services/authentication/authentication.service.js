import * as firebase from "firebase";

export function loginRequest(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password);
}

//hello
