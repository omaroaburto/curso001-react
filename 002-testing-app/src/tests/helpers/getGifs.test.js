import '@testing-library/jest-dom'; 
import getGif from '../../helpers/getGifs';

describe('Son las pruebas del archivo getGifs.test.js', ()=>{
    test('Son las pruebas del helper getGifs, debe traer 12 elementos',async ()=>{
        const category = 'amigos';
        const result = await getGif(category);
        expect(result.length).toBe(12); 
    });
});