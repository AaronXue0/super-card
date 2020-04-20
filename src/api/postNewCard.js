import firebase from "firebase";

export function postNewCard(title, content, user) {
  let db = firebase.firestore();
  let stamp = new Date();
  let date =
    stamp.getFullYear() + " - " + stamp.getMonth() + " - " + stamp.getDate();
  db.collection("issues")
    .doc(title)
    .set({
      timestamp: stamp,
      postDate: date,
      postBy: user,
      content: content,
      likes: 0
    })
    .then(function() {})
    .catch(function(error) {
      return error;
    });
}
