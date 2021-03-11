import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CountApp = ({value}) => {
    //handAdd
    const [count, setCount] = useState(value);
    const handleAdd = () =>{ 
        //forma 1
        setCount(count+1);
        //forma 2
        //setCount((c)=> c+1);
    } 
    const handleSubtract = () =>{ 
        //forma 1
        if(count!==0)
            setCount(count-1); 
    } 
    const handleReset = () =>{ 
        //forma 1
        setCount(value); 
    } 
    return (
        <>
            <h1>CounterApp</h1>
            <span>{count}</span> 
            <br/>
            <button onClick={handleAdd}>+1</button> 
            <button onClick={handleSubtract}>-1</button> 
            <button onClick={handleReset}>Reset</button> 
        </>
    );
}

CountApp.propTypes = {
    value: PropTypes.number
}
CountApp.defaultProps = {
    value: 10
}
export default CountApp
