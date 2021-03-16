import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrip } from '../../components/GifGrip'; 
import { useFetchGif } from '../../hooks/useFetchGif';
jest.mock('../../hooks/useFetchGif.js');

describe('Pruebas del archivo GifGrip.test.js',()=>{
    
    test('Estás son las pruebas del componente <GifGrip/>',()=>{
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        })
        const category = 'Dota2';
        const wrapper = shallow(<GifGrip category={category}/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar imágenes cuando se carga el UseFetchGif',()=>{
        const gifs = [{
            id:"S3iIdbIuYNK588i8AT",    
            title:"Gatos GIF by memecandy",
            url:"https://media2.giphy.com/media/S3iIdbIuYNK588i8AT/giphy.gif?cid=0f518613gtsd2f5q7omh1z014q2wzfl6cj61u2nytsv7bncq&rid=giphy.gif"   
        }]
        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        })
        const category = 'Dota2';
        const wrapper = shallow(<GifGrip category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGripItem').length).toBe(gifs.length);
        expect(wrapper.find('span').exists()).toBe(false);
    }) 
});