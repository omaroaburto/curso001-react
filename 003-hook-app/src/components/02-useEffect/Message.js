import React, { useEffect } from 'react'

export const Message = ({name='', email=''}) => {
    useEffect(() => {
        console.log("con datos");
        return () => {
            console.log("sin datos");
        }
    }, [])
    return (
        <>
          <h5>El nombre es {name} y su correo es {email}</h5>  
        </>
    )
}
