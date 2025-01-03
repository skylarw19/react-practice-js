import { useState } from 'react'

function TodoForm({ handleAddTodo }) {
    const [newTodo, setNewTodo] = useState("")

    const handleInputChange = (e) => {
        setNewTodo(e.target.value)
    }

    const handleAddToList = (e) => {
        e.preventDefault()
        handleAddTodo(newTodo)
    }

    return (
        <>
        <form>
            <input type="text" placeholder="add a todo" onChange={handleInputChange} />
            <button onClick={handleAddToList} >Add To List</button>
        </form>
        </>
    )
}

export default TodoForm