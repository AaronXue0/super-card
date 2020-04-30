import firebase from "firebase";

export function deleteCard(card) {
  let db = firebase.firestore();
  let cardRef = db.collection("issues").doc(card.id);
  cardRef
    .delete()
    .then(function() {
      console.log("Deleted");
    })
    .catch(function(error) {
      return error;
    });
}
