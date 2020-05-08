import firebase from "firebase";

export async function processCard(card) {
  let db = firebase.firestore();
  let process = await db
    .collection("issues")
    .doc(card.id)
    .get()
    .then(async function(doc) {
      if (doc.exists) {
        return await doc.data().isProcessing;
      } else {
        return false;
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  db.collection("issues")
    .doc(card.id)
    .update({ isProcessing: !process });
}
