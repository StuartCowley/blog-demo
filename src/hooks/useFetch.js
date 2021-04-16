import { useEffect, useState } from 'react';

export const useFetch = url => {
    const [data, setState] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(result => result.json())
            .then(result => setState(result));
    }, [url, setState]);

    return [data, setState];
};
