import { useEffect, useState } from "react";
import { app, db } from "../firebase";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

export const GetTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const collectionPath = collection(db, "tasks");
    const unsubscribe = onSnapshot(collectionPath, (snapshot) => {
      const updatedTaskItem = snapshot.docs.map((docSnaphot) =>
        {return {...docSnaphot.data(), id:docSnaphot.id}}
      );
      setTasks(updatedTaskItem);
    });
    return unsubscribe;
  }, [setTasks]);
  return tasks;
};

export const AddTask = async (data) => {
  const collectionPath = collection(db, "tasks");
  return await addDoc(collectionPath, data);
};

export const DeleteTask = (id) => {
  const documentPath = doc(db, "tasks", id);
  deleteDoc(documentPath).then(() => {
    console.log("item deleted");
  });
};

export const UpdateTask = (id, data) => {
  const documentPath = doc(db, "tasks", id);
  return updateDoc(documentPath, data);
};
