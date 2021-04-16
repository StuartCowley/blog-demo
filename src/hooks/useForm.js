import { useState } from 'react';

export const useForm = initial => {
    const [values, setValues] = useState(initial);

    return [
        values,
        event =>
            setValues(prev => ({
                ...prev,
                [event.target.name]: event.target.value,
            })),
        event => {
            event.preventDefault();
            setValues(initial);
        },
    ];
};
