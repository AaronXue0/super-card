import firebase from "firebase";

export function postNewCard(title, content, user) {
  let db = firebase.firestore();
  db.collection("issues")
    .doc(title)
    .set({
      postBy: user,
      content: content,
      likes: 0
    })
    .then(function() {})
    .catch(function(error) {
      return error;
    });
}
