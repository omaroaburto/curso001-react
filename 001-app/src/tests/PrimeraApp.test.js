import React from 'react';  
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import PrimeraApp from '../components/PrimeraApp';
describe('Pruebas del archivo PrimeraApp.test.js',()=>{
    test('Debe mostrar el mensaje Hola soy omaro',()=>{
        const saludo =  "Hola soy omaro";
        const mensaje =  "Soy ingeniero informático";
        //const {getByText} =  render(<PrimeraApp saludo = {saludo} />)
        //expect(getByText(saludo)).toBeInTheDocument();

        const wrapper =  shallow(<PrimeraApp saludo = {saludo} mensaje = {mensaje}/>);
        expect(wrapper).toMatchSnapshot() 
    }); 
});