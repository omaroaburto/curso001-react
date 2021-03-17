import React from 'react';
import ReactDOM from 'react-dom';
//import { SimpleFormWithCustomHook } from './components/02-useEffect/SimpleFormWithCustomHook';
import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
import './styles/index.css';
//import { HooksApp } from './components/HooksApp';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';

ReactDOM.render(
  <React.StrictMode>
    < MultipleCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);
 