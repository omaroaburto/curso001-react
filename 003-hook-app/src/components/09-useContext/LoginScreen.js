import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);
    const usuario = {
        id: new Date(),
        name: 'omaro',
        email: 'omaro@aburto.cl'
    }
    return (
        <div>
            <h3>LoginScreen</h3>
            <hr/>
            <pre>
                {JSON.stringify(usuario, null, 3)}
            </pre>
            <button
                className="btn btn-outline-success"
                onClick={()=>setUser(usuario)}
            >
                usuario
            </button>
        </div>
    )
}
 

