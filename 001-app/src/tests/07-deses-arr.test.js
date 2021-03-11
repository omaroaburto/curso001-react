import '@testing-library/jest-dom';
import { retornaArreglo } from '../base/07-deses-arr';

describe('Pruebas del archivo 07-deses-arr.test.js',()=>{
    test('prueba de la funcción retornaArreglo',()=>{
        const [l1, n1] = ['ABC', 123];
        const [letras, numeros] =  retornaArreglo();
        expect(letras).toEqual(l1);
        expect(typeof letras).toEqual('string');
        expect(numeros).toEqual(n1);
        expect(typeof numeros).toEqual('number');
    });
});