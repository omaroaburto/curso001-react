import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'

export const MultipleCustomHook = () => {
    const{state,increment} = useCounter(1) 
    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${state}`); 
    const {author, quote} = !!data && data[0]; 
    return (
        <>
          <div>
                <h1>BreakingBad Quotes</h1>
                <hr/>
                {
                (loading)    
                ?(
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                )
                :(<blockquote className="blockquote text-right">
                    <p className="mb-0">{quote}</p>
                    <br/>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>)}
          </div>
          <div className="form-group">
            <button className="btn btn-success btn-lg btn-block" onClick={increment}>Siguiente</button> 
          </div>
        </>
    )
}
