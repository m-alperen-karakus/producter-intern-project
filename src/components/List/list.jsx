import { useState } from "react";
import Icon from "../../assets/listItemComplatedIcon.svg";
import { GetTasks } from "../../services/crud.service";
import "./list.scss";
export default function List(props) {
  const task = [
    {
      id: 1,
      isComplated: false,
      text: "New list item",
    },
    {
      id: 2,
      isComplated: true,
      text: "New list item(Done)",
    },
    {
      id: 3,
      isComplated: false,
      text: "New list item(Hover)",
    },
  ];

  const [task01, setTask] = useState(task);

  const updateStatus = (id) => {
    let task02 = task01;
    task02.map((task) => {
      if (id === task.id) {
        task.isComplated = !task.isComplated;
      }
    });

    setTask(task02);
    console.log(task01);
  };

  const tasks = task01.map((task) => {
    if (task.isComplated) {
      return (
        <li
          key={task.id}
          className="task complated"
          onClick={() => {
            updateStatus(task.id);
          }}
        >
          <div className="circle">
            <img src={Icon} alt="complated icon" />
          </div>
          <div>{task.text}</div>
        </li>
      );
    } else {
      return (
        <li
          key={task.id}
          className="task"
          onClick={() => {
            updateStatus(task.id);
          }}
        >
          <div className="circle">
            <img src={Icon} alt="complated icon" />
          </div>
          <div>{task.text}</div>
        </li>
      );
    }
  });
  console.log(GetTasks())  
  return (
    <div>
      <ul className="tasks">{tasks}</ul>
    </div>
  );
}
