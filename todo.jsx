import {useState} from "react";
import {v4 as uuidv4} from "uuid";

export default function Todo(){
    // let [todos,settodos] = useState(["sample task"]);
    let [todos,settodos] = useState([{ task: "sample task", id: uuidv4()}]);
    let [newtodo,setnewtodo] = useState("");

    let addnewtask = ()=>{
        // console.log("we have to add new task in todo");
        // settodos([...todos, newtodo]);
        // settodos([...todos,{task: newtodo, id: uuidv4()}]);
        // setnewtodo("");


        settodos((prevtodos)=>{
            return [...prevtodos, {task: newtodo, id: uuidv4()}]
        })
    }


    let updatetodovalue = (event)=>{
        setnewtodo(event.target.value);
    }

    let deletetodo = (id)=>{
        // console.log(id)
        // settodos(todos.filter((todo)=>todo.id != id))


        settodos((prevtodos)=>
            todos.filter((prevtodos)=>prevtodos.id !=id)
        )
    }
    return(
        <div>
            <input placeholder="add a task" value={newtodo} onChange={updatetodovalue}></input>
            <br></br>
            <br></br>
            <button onClick={addnewtask}>add task</button>

            <hr></hr>
            <h4>tasks to do</h4>
            <ul>
            {todos.map((todo)=>(
                      <li key={todo.id}>
                        <span>{todo.task}</span>
                       <button onClick={()=>deletetodo(todo.id)}>delete</button>
                        </li>
                ))}
              
            </ul>
        </div>
    )
}



