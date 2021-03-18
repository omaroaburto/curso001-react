import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'

export const Layout = () => {
    const{state,increment} = useCounter(1) 
    const {data} = useFetch(`https://breakingbadapi.com/api/quotes/${state}`); 
    const {quote} = !!data && data[0]; 
    const tag = useRef()
    const [boxSize, setBoxSize] = useState({})
    useLayoutEffect(() => {
        setBoxSize(tag.current.getBoundingClientRect());
    }, [quote])
    return (
        <>
          <div>
                <h1>LayoutEffect</h1>
                <hr/>
                <blockquote className="blockquote text-right alert-warning p-4">
                    <p ref={tag} 
                        className="mb-0"
                    >
                        {quote}
                    </p>
                    <br/> 
                </blockquote>
          </div>
          <pre className="alert-success p-3">
              {JSON.stringify(boxSize,null, 3)}
          </pre>
          <div className="form-group">
            <button className="btn btn-success btn-lg btn-block" onClick={increment}>Siguiente</button> 
          </div>
        </>
    )
}
