import React from 'react'
import PropTypes from 'prop-types';
//ejemplo de pros
const CounterApp = ({numero}) => {
    return (
        <>
            <h1>Hola mundo</h1>
            <span>{numero}</span>
        </>
    )
}

CounterApp.propTypes={
    numero : PropTypes.number.isRequired
};

export default CounterApp;