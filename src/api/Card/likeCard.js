import firebase from "firebase";
import store from "../../store";

export function likeCard(likes, card, user) {
  let db = firebase.firestore();
  let id = user.uid;
  let email = user.email;
  if (likes > 0 && !detectLiked(card, id)) {
    let currentLikes = card.data.likes + 1;
    db.collection("issues")
      .doc(card.id)
      .update({
        likes: currentLikes,
        [id]: email
      });
  } else {
    let currentLikes = card.data.likes - 1;
    if (currentLikes < 0) currentLikes = 0;
    db.collection("issues")
      .doc(card.id)
      .update({
        likes: currentLikes,
        [id]: firebase.firestore.FieldValue.delete()
      });
    store.dispatch("setCardsAction");
  }
}

function detectLiked(card, id) {
  let liked = false;
  Object.keys(card.data).forEach(element => {
    if (element === id) {
      liked = true;
      return liked;
    }
  });
  return liked;
}
