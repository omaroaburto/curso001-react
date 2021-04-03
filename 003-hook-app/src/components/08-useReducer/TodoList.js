import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => { 
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo,i)=>( 
                    <TodoItem 
                        key={i}
                        todo={todo} 
                        handleToggle={handleToggle} 
                        index={i} 
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}
