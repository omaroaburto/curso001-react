import React, { useRef } from 'react'

export const FocusScreen = () => {
    const inputRef = useRef();
    const handleClick = () =>{
        inputRef.current.select();
    }
    return (
        <>
            <h3>Focus Screen</h3>
            <hr/>
            <div className="form-control">  
                <input 
                    ref={inputRef}
                    placeholder="nombre"
                />
            </div>
            <div className="form-control">
                <button 
                    className="btn btn-primary"
                    onClick={handleClick}
                >
                    focus
                </button>
            </div>
        </>
    )
}
