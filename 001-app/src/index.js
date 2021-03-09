import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import PrimeraApp from './components/PrimeraApp';
import './style/index.css';
const app =  document.querySelector('#app');
ReactDOM.render(<PrimeraApp saludo="hola gente" mensaje="mi nombre es omaro aburto"/>,app);
//ReactDOM.render(<CounterApp numero={22}/>, app);