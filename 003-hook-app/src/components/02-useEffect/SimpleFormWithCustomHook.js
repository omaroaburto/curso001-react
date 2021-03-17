import React from 'react'
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';

export const SimpleFormWithCustomHook = () => {
    const {state, handleInputChange} = useForm({
        name:'',
        email:''
    });
    const {name, email} =  state;
     
    return (
        <>
            <h3>Use Effect with custom hook</h3>
            <hr/>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text"
                className="form-control"
                name="name" id="name" 
                aria-describedby="helpId" 
                placeholder="name"
                value={name}
                onChange={handleInputChange}
                /> 
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email"
                className="form-control" 
                name="email" 
                id="email" 
                aria-describedby="helpId" 
                placeholder="email"
                value={email} 
                onChange={handleInputChange}
                /> 
            </div>
            <br/>
            {(name && email)&&<Message name={name} email={email}/>}
        </>
    )
}
