import { useState } from 'react'

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    };

    const handleInputChange = ({target}) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }; 

    // values: estado del formulario
    // handleInputChange: para cambiar los valores del formulario
    return [values, handleInputChange, reset];

};
