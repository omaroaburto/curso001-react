import "@testing-library/jest-dom";
import { getSaludo } from "../base/02-template-string";

describe('Pruebas en el archivo 02-template-string.test.js',() => {
    test('Prueba en el método getSaludo', () => { 
        const nombre="Omaro";
        const saludo = getSaludo(nombre);  
        expect(saludo).toBe(`Hola ${nombre}`);
    });
    test('Prueba en el método getSaludo sin enviar dato', () => {  
        const saludo = getSaludo();  
        expect(saludo).toBe(`Hola omaro`);
    });
}); 