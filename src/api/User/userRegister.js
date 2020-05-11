import firebase from "firebase";
import store from "../../store";

export function userRegister() {
  let db = firebase.firestore();
  let user = firebase.auth().currentUser;
  let docRef = db.collection("users").doc(user.uid);
  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log("Signin");
        db.collection("users")
          .doc(user.uid)
          .update({
            lastSignin: new Date()
          });
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
      console.log(error);
      return error;
    })
    .finally(function() {
      store.commit("setLoading", false);
    });
}
