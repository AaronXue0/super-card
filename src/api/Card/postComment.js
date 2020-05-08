import firebase from "firebase";

export function postComment(user, card, reply) {
  let db = firebase.firestore();
  let stamp = new Date();
  let date =
    new Date().getFullYear() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getDate();
  db.collection("issues")
    .doc(card.id)
    .collection("comments")
    .add({
      reply: reply,
      postBy: user.email,
      postDate: date
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
      alert("留言太快囉，稍等一下吧 | 記得要用北科信箱喔！");
      return error;
    });
}
