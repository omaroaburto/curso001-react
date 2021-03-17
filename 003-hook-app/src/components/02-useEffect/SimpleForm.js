import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [state, setstate] = useState({
        name:'',
        email:''
    });
    const {name, email} = state;
    const handleInputChange = ({target}) =>{
        setstate({
            ...state,
            [target.name] : target.value
        });
    } 
    useEffect(() => {
        console.log("cambio el nombre")
    }, [name])
    useEffect(() => {
        console.log("cambio el correo")
   }, [email]) 
    return (
        <>
            <h3>UseEffect</h3>
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
