import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas del archivo AddCategory.test.js',()=>{
    const setCategories = jest.fn();
    const category = ['hola'];
    let wrapper = shallow(<AddCategory setCategories={setCategories} category={category}/>);
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper =  shallow(<AddCategory setCategories={setCategories} category={category}/>);
    });

    test('Son las pruebas del componente <AddCategoryTest/>', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto',()=>{
        const input =  wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target:{value}});
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe postear la información con submit', ()=>{
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y  limpiar la caja de texto',()=>{
        const value = '';
        wrapper.find('input').simulate('change', {target:{value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}}); 
        //pide que se llame una vez la función
        //expect(setCategories).toHaveBeenCalled();
        //pide que se llame 2 veces
        //expect(setCategories).toHaveBeenCalledTimes(2);
        //que se llame con cualquier tipo de función
        //expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('')
    });
});