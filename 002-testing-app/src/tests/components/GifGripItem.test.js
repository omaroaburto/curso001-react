import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGripItem } from '../../components/GifGripItem'; 

describe('Pruebas del archivo GofGripItem.test.js',()=>{
    
    const id ="S3iIdbIuYNK588i8AT";    
    const title="Gatos GIF by memecandy";
    const url= "https://media2.giphy.com/media/S3iIdbIuYNK588i8AT/giphy.gif?cid=0f518613gtsd2f5q7omh1z014q2wzfl6cj61u2nytsv7bncq&rid=giphy.gif";
    
    const wrapper = shallow(<GifGripItem id={id} title={title} url={url}/>);
    test('Prueba del componente <GifGripItem/>',()=>{ 
        expect(wrapper).toMatchSnapshot();
    });
    test('la imagen necesita un url y un alt',()=>{
        const  img =  wrapper.find('img');
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    });
    test('Evaluamos si existe la className item-caja',()=>{
        const div =  wrapper.find('div');
        expect(div.props().className).toBe('item-caja');
        
    });
});