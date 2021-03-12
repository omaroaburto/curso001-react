import React from 'react';  
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CountApp from '../components/CountApp';

describe('Son las pruebas del archivo CounterApp.test.js',()=>{
    let wrapper
    //se ejecta antes de cada test
    beforeEach(()=>{
        wrapper =  shallow(<CountApp/>); 
    });

    //test 1
    test('Prueba de componente <CountApp />',()=>{
        expect(wrapper).toMatchSnapshot();
    });

    //test 2
    test('Prueba de <CountApp/> con props', ()=>{
        const value = 100;
        const wrapper =  shallow(<CountApp value = {value}/>); 
        expect(wrapper).toMatchSnapshot();
    });

    //test 3
    test('Prueba <CountApp/> el botón +1 debe aumentar el valor en 1', ()=>{
        wrapper.find('button').at(0).simulate('click');
        const countText =  wrapper.find('span').text().trim();
        expect(countText).toBe('11');
    });

    //test 4
    test('Prueba <CountApp/> el botón -1 debe disminuir el valor en 1', ()=>{
        wrapper.find('button').at(1).simulate('click');
        const countText =  wrapper.find('span').text().trim(); 
        expect(countText).toBe('9');
    });
});