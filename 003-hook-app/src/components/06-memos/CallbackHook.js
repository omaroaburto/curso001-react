import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(0);
    //const increment = () => {
      //  setCounter(counter+1);
    //}
    const increment = useCallback( (num)=>{
        setCounter(c => c + num );
    },[ setCounter ]);

    return (
        <>
          <h1 className="mt-5">useCallback Hook: {counter}</h1> 
          <hr/>
          <ShowIncrement increment = {increment}/>
        </>
    )
}
