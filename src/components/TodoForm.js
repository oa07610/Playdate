
import {useState} from "react"

function TodoForm() {
    const [newtodotext, setnewtodotext] = useState("")
    const [newtodolist, setnewtodolist] = useState([])
    const addnewtodo = () => {
    {
        const copytodolist = [...todolist]
        copytodolist.push(newtodotext)
        setnewtodotext(copytodolist)
        setnewtodotext("")
    }
}
    console.log(todolist)
    todolist.forEach((todo) => {
        console.log(todo)
    });
    
    return (
        <div className="App">
            <h1> {str}</h1>

            <input type = "text" value={newtodotext} onChange={handleTitleChange} />
            Current todos: 
        </div>
    );
    }

export default TodoForm;
