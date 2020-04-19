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
      store.commit("setCards", data);
    },
    function(error) {
      return error;
    }
  );
}
