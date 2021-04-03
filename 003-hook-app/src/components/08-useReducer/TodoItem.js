import React from 'react'

export const TodoItem = ({todo, handleToggle, index, handleDelete}) => { 
    return (
        <li
            key={todo.id}
            className="list-group-item mt-1"
        >
            <p 
                className={
                    (todo.done)?'parrafo2':'parrafo1'
                }
                onClick={()=>handleToggle(todo.id)}
            ><b>{index+1}.</b> {todo.desc}</p>
            <button 
                className="btn btn-danger"
                onClick={()=>{
                    handleDelete(todo.id);
                }}
            >
                Borrar
            </button>
        </li>
    )
}
