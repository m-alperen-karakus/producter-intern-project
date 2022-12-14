import { useRef } from "react";
import { AddTask } from "../../services/crud.service";
import "./form.scss";

export default function Form() {
  const taskInput = useRef(null);

  function addTask() {
    if (taskInput.current.value === "") {
      alert("Please enter text for task");
    } else {
      AddTask({ text: taskInput.current.value, isComplated: false })
        .then(() => {
          console.log("Data has been added");
        })
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="form">
      <input placeholder="Add new list item" ref={taskInput} />
      <button onClick={() => addTask()}>Add</button>
    </div>
  );
}
