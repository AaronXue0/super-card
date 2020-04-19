import firebase from "firebase";

export function getCards() {
  let db = firebase.firestore();
  db.collection("issues").onSnapshot(function(doc) {
    console.log("Current data: ", doc);
    doc.forEach(element => {
      console.log(element);
    });
  });
}
