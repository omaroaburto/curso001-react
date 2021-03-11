import '@testing-library/jest-dom';
import { getUser, getUserActivo } from '../base/05-funciones';

describe('Es una prueba del archivo 05-funciones.test.js',()=>{
    test('Prueba del método getUser',()=>{
        const usuario = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const resultadoUsuario = getUser();
        expect(usuario).toEqual(resultadoUsuario); 
    });
    test('Prueba del método getUserActivo',()=>{
        const nombre = 'omaro'
        const usuario = {
            uid: 'ABC567',
            username: nombre
        };

        const resultadoUsuario = getUserActivo(nombre); 
        expect(usuario).toEqual(resultadoUsuario);  
    });
});