import '@testing-library/jest-dom';
import {renderHook} from '@testing-library/react-hooks'
import { useFetchGif } from "../../hooks/useFetchGif";

describe('Son las pruebas del archivo useFetchGif.test.js',()=>{
    test('Son las pruebas del hook useFetchGif, debe retornar el estado inicial',()=>{
        const {result, waitForNextUpdate}= renderHook(() => useFetchGif('Colo Colo'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        console.log(data, loading); 
        expect(data).toEqual([]);
        expect(loading).toEqual(true);
    });

    test('Debe retornar un arreglo de imgs y el loading en false', async()=>{
        const {result, waitForNextUpdate}= renderHook(() => useFetchGif('Colo Colo'));
        await waitForNextUpdate();
        const {data, loading} = result.current; 
        expect(data.length).to(12);
        expect(loading).toEqual(false); 
    });
});
