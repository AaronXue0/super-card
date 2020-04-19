import firebase from "firebase";

export function signin() {
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase.auth().languageCode = "pt";
  provider.setCustomParameters({
    login_hint: "txxxxxxxxx@ntut.org.com"
  });
  firebase
    .auth()
    .signInWithPopup(provider)
    .then()
    .catch(function(error) {
      return error;
    });
}
