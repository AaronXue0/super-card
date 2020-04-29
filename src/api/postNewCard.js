import firebase from "firebase";

export function postNewCard(title, content, user) {
  let db = firebase.firestore();
  let stamp = new Date();
  console.log(user);
  let date =
    stamp.getFullYear() + " - " + stamp.getMonth() + " - " + stamp.getDate();
  db.collection("issues")
    .doc(title)
    .set({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      likes: 0,
      content: content,
      postDate: date,
      postBy: user.email,
      owner: user.uid
    })
    .then(function() {})
    .catch(function(error) {
      return error;
    });
}
