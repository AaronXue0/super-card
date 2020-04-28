import firebase from "firebase";
import store from "../store";

export async function retriveCards() {
  let db = firebase.firestore();
  db.collection("issues").onSnapshot(
    function(snapShot) {
      let data = [];
      snapShot.forEach(async doc => {
        const comments = await getSubCollection(doc);
        data.push({
          id: doc.id,
          data: doc.data(),
          comment: comments
        });
      });
      store.commit("setCards", sort(data));
    },
    function(error) {
      return error;
    }
  );
}

async function getSubCollection(doc) {
  let db = firebase.firestore();
  let subCollection = [];
  db.collection("issues")
    .doc(doc.id)
    .collection("comments")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        subCollection.push(doc.data());
      });
    });
  return subCollection;
}

function sort(data) {
  let sorted = data;
  sorted.sort(function(a, b) {
    let keyA = a.data.likes;
    let keyB = b.data.likes;
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });
  return sorted;
}
