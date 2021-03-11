import '@testing-library/jest-dom';
import { getImagen } from "../base/11-async-await";

describe('Se hacen las pruebas del archivo 11-async-await.js',()=>{
    test('Prueba de función getImagen', async ()=>{
        const url = await getImagen();
        expect(typeof url).toBe('string'); 
    });
});