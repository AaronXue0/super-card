import firebase from "firebase";

export function writeCard(likes, card, user) {
  let db = firebase.firestore();
  let id = user.uid;
  let email = user.email;
  if (likes > 0) {
    db.collection("issues")
      .doc(card.id)
      .update({
        likes: card.data.likes + likes,
        [id]: email
      });
  } else {
    db.collection("issues")
      .doc(card.id)
      .update({
        likes: card.data.likes + likes,
        [id]: firebase.firestore.FieldValue.delete()
      });
  }
}
