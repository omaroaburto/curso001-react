import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

export const Memorize = () => {
    const {state, increment} = useCounter(30)
    const [show, setShow] = useState(true)
    return (
        <>
            <h3>Memorize</h3>
            <h3 className="alert-warning p-5">Counter: <Small value={state} /></h3>
            <br/>
            <div className="form-group">
                <button onClick={increment} className="btn btn-warning">+1</button>
            </div>
            <br/>
            <div className="form-group">
                <button
                    className="btn btn-outline-primary"
                    onClick={()=>{
                        setShow(!show);
                    }}
                >
                    show/hide {JSON.stringify(show)}
                </button>
            </div>
        </>
    )
}
