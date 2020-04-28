import firebase from "firebase";

export function postNewCard(title, content, user) {
  let db = firebase.firestore();
  let stamp = new Date();
  let date =
    new Date().getFullYear() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getDate();
  db.collection("issues")
    .doc(user.uid + "" + stamp)
    .set({
      timestamp: stamp,
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
