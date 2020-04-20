import firebase from "firebase";

export function signin() {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}
