import { useEffect, useState } from "react";
import Icon from "../../assets/listItemComplatedIcon.svg";
import { GetTasks } from "../../services/crud.service";
import "./list.scss";
export default function List() {
  const db = GetTasks();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(db);
  }, [db]);

  const updateStatus = (id) => {
    let task02 = data;
    task02.map((task) => {
      if (id === task.id) {
        task.isComplated = !task.isComplated;
      }
    });

    setData(task02);
    console.log(data);
  };

  const tasks = data.map((task) => {
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
  return (
    <div>
      <ul className="tasks">{tasks}</ul>
    </div>
  );
}
