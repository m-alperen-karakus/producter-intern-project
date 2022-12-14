import { useEffect, useState } from "react";
import { app, db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export const GetTasks = () => {
  const [tasks, setTasks] = useState([]);
  // useEffect(()=>{
  //     const collectionPath = collection(db, "tasks");
  //     getDocs(collectionPath).then( (data) => {
  //         setTasks(
  //             data.docs.map((task)=>{
  //                 return {...task.data(), id:task.id}
  //             })
  //         )
  //     })
  // },[])

  useEffect(() => {
    const collectionPath = collection(db, "tasks");

    const unsubscribe = onSnapshot(collectionPath, (snapshot) => {
      const updatedTaskItem = snapshot.docs.map((docSnaphot) =>
        docSnaphot.data()
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
  const collectionPath = doc(db, "tasks", id);
  deleteDoc(collectionPath).then(() => {
    console.log("item deleted");
  });
};
