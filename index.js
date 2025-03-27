import { db,collection,addDoc } from "./firebase.js";
async function addData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "John Doe",
      age: 30,
      city: "Tokyo"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

// 関数を実行
addData();