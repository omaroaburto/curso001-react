import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
    const{state,increment,decrement, reset} = useCounter(100)
    const f=2; //factor
    return (
        <>
            <h3>Counter with custom hook: {state}</h3>
            <hr/>
            <button className="btn btn-success btn-lg btn-block" onClick={()=>increment(f)}>+{f}</button>
            <button className="btn btn-success btn-lg btn-block" onClick={()=>decrement(f)}>-{f}</button>
            <button className="btn btn-success btn-lg btn-block" onClick={reset}>Reset</button>
        </>
    )
}
