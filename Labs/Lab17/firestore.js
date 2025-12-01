import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

export const addLog = async (logData) => {
  try {
    const docRef = await addDoc(collection(db, "logs"), logData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const readEntries = async () => {
  const logs = [];
  try {
    const records = await getDocs(collection(db, "entries"));
    records.forEach((doc) => {
      logs.push(doc.data());
    });
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
  return logs;
};
