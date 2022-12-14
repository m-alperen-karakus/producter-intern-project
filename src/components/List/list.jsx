import { useEffect, useState } from "react";
import Icon from "../../assets/listItemComplatedIcon.svg";
import { DeleteTask, GetTasks, UpdateTask } from "../../services/crud.service";
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
        UpdateTask(id, { isComplated: !task.isComplated })
          .then(() => console.log("Status has been chanced"))
          .catch((err) => console.log(err));
      }
    });
    setData(task02);
  };

  const tasks = data.map((task) => {
    if (task.isComplated) {
      return (
        <li key={task.id} className="task complated" onClick={() => updateStatus(task.id)} >
          <div className="circle">
            <img src={Icon} alt="complated icon" />
          </div>
          <div>{task.text}</div>
        </li>
      );
    } else {
      return (
        <li key={task.id} className="task" onClick={() => updateStatus(task.id) }>
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
      <hr />
      <div className="buttonGroup">
        <div className="listLength">
          {data.filter((item) => item.isComplated).length} task complated
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => DeleteTask()} >
          Clear all complated tasks
        </div>
      </div>
    </div>
  );
}
