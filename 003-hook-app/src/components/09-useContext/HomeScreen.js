import React, { useContext } from 'react'  
import { UserContext } from './UserContext';

export function HomeScreen() {
    const userContext = useContext(UserContext);
    console.log(userContext)
    return (
        <div>
            <h3>HomeScreen</h3>
            <hr/> 
        </div>
    )
}

 
