import firebase from "firebase";

export function userRegister() {
  let db = firebase.firestore();
  let user = firebase.auth().currentUser;
  let docRef = db.collection("users").doc(user.uid);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Signin");
      } else {
        db.collection("users")
          .doc(user.uid)
          .set({
            userId: user.uid,
            displayName: user.displayName,
            email: user.email,
            lastSignin: new Date(),
            lastSend: firebase.firestore.FieldValue.serverTimestamp()
          })
          .then(function() {
            console.log("register");
          })
          .catch(function(error) {
            return error;
          });
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}
