import firebase from "firebase";

export function postComment(user, card, reply, id) {
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
    .doc(id)
    .set({
      reply: reply,
      postBy: user.email,
      postDate: date,
      likes: 0,
      isDeleted: false
    })
    .then(function() {
      db.collection("users")
        .doc(user.uid)
        .update({
          lastSend: stamp
        });
    })
    .catch(function(error) {
      alert("留言太快囉，稍等一下吧 | 記得要用北科信箱喔！");
      return error;
    });
}

export function deleteComment(card, item) {
  let db = firebase.firestore();
  db.collection("issues")
    .doc(card.id)
    .collection("comments")
    .doc(item.id)
    .update({ isDeleted: true });
}
