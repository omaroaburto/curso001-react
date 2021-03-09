import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, mensaje}) => {
    return (
        <>
            <h1>{saludo}</h1>
            <span>{mensaje}</span>   
        </>
    )
}

PrimeraApp.propTypes={
    saludo : PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired
};

PrimeraApp.defaultProps ={
    saludo: 'Hola gente',
    mensaje: 'Mi nombre es omaro'
}

export default PrimeraApp;