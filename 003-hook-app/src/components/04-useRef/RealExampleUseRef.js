import React, { useState } from 'react'
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook'

export const RealExampleUseRef = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h3>Real Example useRef</h3>
            {show &&<MultipleCustomHook/>}
            <button
                className="btn btn-danger mt-5"
                onClick={()=>{
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>
        </>
    )
}
