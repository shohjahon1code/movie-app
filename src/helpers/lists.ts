import { db } from "@/firebase";
import { Mylist } from "@/interfaces/app.interface";
import { collection, getDocs } from "firebase/firestore";

export const getList = async (userId?: string) => {
  let myList: Mylist[] = [];
  const querySnapshot = await getDocs(collection(db, "list"));

  querySnapshot.forEach((doc) => {
    if (doc.data().userId === userId) {
      myList.push(doc.data() as Mylist);
    }
  });

  return myList;
};
