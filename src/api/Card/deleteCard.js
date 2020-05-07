import firebase from "firebase";

export function deleteCard(card) {
  let db = firebase.firestore();
  db.collection("issues")
    .doc(card.id)
    .update({ isDeleted: true });
}
