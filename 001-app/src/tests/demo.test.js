
describe('Pruebas en el archivo demo.test.js',() => {
    test('Deben ser iguales los string ', () => {
        //1). inicializamos 
        const mensaje1 = 'Hola mundo';
        //2) Estímulo
        const mensaje2 = `Hola mundo`;
        //3). Observar el comportamiento
        expect( mensaje1 ).toBe(mensaje2);
    });
});