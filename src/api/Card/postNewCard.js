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
      content: content,
      isArchived: false,
      likes: 0,
      owner: user.uid,
      postDate: date,
      postBy: user.email,
      title: title,
      timestamp: stamp
    })
    .then(function() {
      db.collection("users")
        .doc(user.uid)
        .update({
          lastSend: stamp
        });
    })
    .catch(function(error) {
      alert("發文太快囉，稍等一下吧 | 記得要用北科信箱喔！");
      return error;
    });
}
