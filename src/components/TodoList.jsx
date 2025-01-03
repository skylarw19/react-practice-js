import { useState } from 'react'

import Todo from '../components/Todo'


function TodoList({todos, handleDeleteTodo, handleEditTodo}) {

    

    return(
        <>
            <p>To Do List</p>
            { todos.map((todo, i) => 
                <Todo key={i} todo={todo} handleDeleteTodo={handleDeleteTodo} idx={i} handleEditTodo={handleEditTodo}/>
            ) }
        </>
    )
}

export default TodoList