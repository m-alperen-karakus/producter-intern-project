import { useEffect, useState } from "react";
import { app, db } from "../firebase";
import { getDocs ,addDoc,collection ,deleteDoc, doc } from "firebase/firestore"

export const GetTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        const collectionPath = collection(db, "tasks");
        getDocs(collectionPath).then( (data) => {
            setTasks(
                data.docs.map((task)=>{
                    return {...task.data(), id:task.id}
                })
            )
        })
    },[])
    return tasks
}

export const AddTask = (data) => {
    const collectionPath = collection(db, "tasks");
    addDoc(collectionPath,data).then(()=>{
        console.log("data added")
    })
}

export const DeleteTask = (id) => {
    const collectionPath = doc(db, "tasks" , id);
    deleteDoc(collectionPath).then( () => {
        console.log("item deleted")
    })

}