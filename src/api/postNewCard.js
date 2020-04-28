import firebase from "firebase";

export function postNewCard(title, content, user) {
  let db = firebase.firestore();
  let stamp = new Date();
  let date =
    stamp.getFullYear() +
    "-" +
    stamp.getMonth() +
    "-" +
    stamp.getDate() +
    " " +
    stamp.getHours() +
    ":" +
    stamp.getMinutes();
  db.collection("issues")
    .doc(user.uid + "" + stamp)
    .set({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      likes: 0,
      title: title,
      content: content,
      postDate: date,
      postBy: user.email,
      owner: user.uid
    })
    .then(function() {
      db.collection("users")
        .doc(user.uid)
        .update({
          lastSend: stamp
        });
    })
    .catch(function(error) {
      console.log(error);
      return error;
    });
}
