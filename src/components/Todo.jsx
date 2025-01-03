import { useState } from "react"

import './Todo.css'

function Todo({todo, handleDeleteTodo, idx, handleEditTodo}) {

    const [isComplete, setIsComplete] = useState(false)
    const [showEditBox, setShowEditBox] = useState(false)
    const [todoInput, setTodoInput] = useState(todo.item)

    const onClickDelete = (index) => {
        handleDeleteTodo(index)
    }

    const handleClickEdit = () => {
        console.log('showEditBox', showEditBox)
        setShowEditBox(s => !s)
        console.log('showEditBox', showEditBox)

        if (showEditBox) {
            console.log('inside if show ')
            console.log(idx, todoInput)
            handleEditTodo(idx, todoInput)
        }

    }

    const handleUpdateInput = (e) => {
        setTodoInput(t => t = e.target.value)
    }

    // doing this or doing it within return both work. one might be a little neater than the other?
    const editInputComponent = <input type="text" value={todoInput} onChange={handleUpdateInput} />
    const displayTodoComponent = <>
        <p>{todo.item}</p>
        <p>{todo.status}</p>
    </>

    return(
        <>
        
            <div className="todo-item">
                <input type="checkbox" checked={isComplete} onChange={() => setIsComplete(!isComplete)}/>
                {/* { showEditBox ? 
                    <input type="text" value={todoInput} onChange={handleUpdateInput} />
                :
                    <>
                        <p>{todo.item}</p>
                        <p>{todo.status}</p>
                    </>
                } */}

                { showEditBox ? editInputComponent : displayTodoComponent }
                <button onClick={handleClickEdit}>{ showEditBox ? "Update To Do" : "Edit To Do"}</button>
                <button onClick={() => onClickDelete(idx)}>Delete</button>
            </div>
        </>
    )
}

export default Todo