import { initializeApp } from "./firebase.js";
import { getFirestore } from "./firebase.js";
window.onload = async () => {
const value = {
  birth: 1014,
  name: "yuuki",
  createdAt: new Date(),
};
await firestore.collection("user").add(value);
};