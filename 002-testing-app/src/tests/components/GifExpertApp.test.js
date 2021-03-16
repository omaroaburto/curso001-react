import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifExpertApp} from '../../components/GifExpertApp';
describe('Pruebas del archivo GifExpertApp.test.js',()=>{
    test('Pruebas del componente <GifExpertApp/>',()=>{
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar una lista de categorias',()=>{
        const categories = ['Rock', 'Queen', 'Animales'];
        const wrapper = shallow(<GifExpertApp elements={categories}/>);
        expect(wrapper.find('GifGrip').length).toBe(categories.length)
    });
});