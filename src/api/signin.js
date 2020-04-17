import firebase from "firebase";

export async function signin() {
  let userKey;
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  firebase.auth().languageCode = "pt";
  provider.setCustomParameters({
    login_hint: "txxxxxxxxx@ntut.org.com"
  });
  userKey = await firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      return result;
    })
    .catch(function(error) {
      return error;
    });
  return userKey;
}
