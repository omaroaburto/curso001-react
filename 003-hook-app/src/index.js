import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './components/05-useLayoutEffect/Layout';
//import { RealExampleUseRef } from './components/04-useRef/RealExampleUseRef';
//import { SimpleFormWithCustomHook } from './components/02-useEffect/SimpleFormWithCustomHook';
//import { MultipleCustomHook } from './components/03-examples/MultipleCustomHook';
//import { FocusScreen } from './components/04-useRef/FocusScreen';
//import { HooksApp } from './components/HooksApp';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout/>
  </React.StrictMode>,
  document.getElementById('root')
);
 