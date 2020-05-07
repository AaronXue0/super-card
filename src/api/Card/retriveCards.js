import firebase from "firebase";
import store from "../../store";

export async function retriveCards() {
  let db = firebase.firestore();
  db.collection("issues").onSnapshot(
    async function(snapShot) {
      let data = [];
      snapShot.forEach(async doc => {
        const comments = await getSubCollection(doc);
        data.push({
          id: doc.id,
          data: doc.data(),
          comment: comments
        });
      });
      store.commit("setCards", await sortData(data));
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

async function sortData(data) {
  let obj = await data;
  let sorted = obj.sort((a, b) => b.data.likes - a.data.likes);
  return sorted;
}
