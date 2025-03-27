import { db } from "./firebase.js";
const main = async () => {
const value = {
  birth: 1014,
  name: "yuuki",
  createdAt: new Date(),
};
await firestore.collection("user").add(value);
};