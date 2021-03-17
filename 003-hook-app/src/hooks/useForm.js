import { useState } from 'react'
export const useForm = (incialState = {}) => {
    const [state, setstate] = useState(incialState); 
    const handleInputChange = ({target}) =>{
        setstate({
            ...state,
            [target.name] : target.value
        });
    }  
    return {
        state,
        handleInputChange
    }
}
