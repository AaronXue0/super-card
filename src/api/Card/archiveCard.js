import firebase from "firebase";

export async function archiveCard(card) {
  let db = firebase.firestore();
  let archive = await db
    .collection("issues")
    .doc(card.id)
    .get()
    .then(async function(doc) {
      if (doc.exists) {
        return await doc.data().isArchived;
      } else {
        return false;
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  db.collection("issues")
    .doc(card.id)
    .update({ isArchived: !archive });
}
