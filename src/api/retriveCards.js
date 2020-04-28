import firebase from "firebase";
import store from "../store";

export async function retriveCards() {
  let db = firebase.firestore();
  db.collection("issues").onSnapshot(
    function(snapShot) {
      let data = [];
      snapShot.forEach(doc => {
        data.push({ id: doc.id, data: doc.data() });
      });
      store.commit("setCards", sort(data));
    },
    function(error) {
      return error;
    }
  );
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
