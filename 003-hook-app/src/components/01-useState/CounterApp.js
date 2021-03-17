import React, { useState } from 'react'

export const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 33,
        counter4: 44
    })
    const {counter1, counter2} = state;
    return (
        <>
          <h3>Counter 1: {counter1}</h3>  
          <h3>Counter 2: {counter2}</h3>
          <button 
            onClick={()=>{
                setState({
                    ...state,
                    counter1:counter1+1
                })
            }} 
            className="btn btn-success btn-lg"
         >+1</button>  
        </>
    )
}
