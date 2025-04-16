import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
} from "firebase/firestore";

export async function getItems(userId) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const itemSnap = await getDocs(itemsRef);

    const items = itemSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return items;
  } catch (error) {
    console.error("Error getting items: ", error);
  }
}

export async function addItem(userId, item) {
  try {
    const itemsRef = collection(db, "users", userId, "items");
    const newItem = await addDoc(itemsRef, item);
    return newItem.id;
  } catch (error) {
    console.error("Error adding item: ", error);
  }
}

export async function deleteItem(userId, itemId) {
  console.log("Deleting item with ID:", itemId);
  console.log("User ID:", userId);
  try {
    const itemRef = doc(db, "users", userId, "items", itemId);
    console.log("Doc path:", itemRef.path);
    await deleteDoc(itemRef);
  } catch (error) {
    console.error("Error deleting item: ", error);
  }
}
