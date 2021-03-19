import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import { useCounter } from '../../hooks/useCounter' 
export const MemoHook = () => {
    const {state, increment} = useCounter(400)
    const [show, setShow] = useState(true)
    const memoProcesoPesado = useMemo(() => procesoPesado(state), [state]);
    
    return (
        <>
            <h3>Memo Hook</h3>
            <h3 className="alert-warning p-5">Counter: <small>{state}</small></h3>
            <hr/>
            <p>{memoProcesoPesado}</p>
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
