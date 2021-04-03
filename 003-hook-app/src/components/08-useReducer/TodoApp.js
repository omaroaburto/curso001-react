import React, {useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    const [{description},handleInputChange, resetForm] =  useForm({
        description: ''
    }); 

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (id) =>{ 
        const action = {
            type: 'delete',
            payload: id
        };
        dispatch(action);
    }

    const handleToggle = (id) => {
        const action = {
            type:'toggle',
            payload: id
        };
        dispatch(action);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();   
        if(description.trim().length<=1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        } 
        const action ={
            type: 'add',
            payload: newTodo
        } 
        dispatch(action); 
        resetForm();
    }    
    return (
        <>
           <h1 className="mt-5">TodoApp({todos.length})</h1>
           <hr/>
            <div className="row">
                <div className="col-7 alert-primary p-2 border rounded mr-5">
                    <TodoList todos={todos} handleToggle ={handleToggle} handleDelete={handleDelete} />
                </div>
                <div className="col-5  border p-2 container-fluid rounded">
                        <h4 className="text-center">Agregar TODO</h4>
                        <hr/>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group ">
                                <input
                                    name="description"
                                    type="text"
                                    placeholder="Aprender..."
                                    autoComplete="off"
                                    className="form-control" 
                                    value={description}
                                    onChange = {handleInputChange}
                                />
                            </div>
                            <div className="form-group ">
                                <button
                                    type="submit" 
                                    className="btn btn-outline-success btn-lg nbtn mt-2"
                                >
                                    Agregar
                                </button>
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}
