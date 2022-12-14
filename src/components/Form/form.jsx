import { AddTask, DeleteTask } from "../../services/crud.service"
import "./form.scss"

export default function Form(props){

    // AddTask({
    //     text:"sdkjasdlas",
    //     isComplated:false
    // })
    DeleteTask("W9Eb4TZ9DWi49g0lxCFB")
    return (
        <div className="form">
            <input placeholder="Add new button" />
            <button>Add</button>
        </div>
    )

}