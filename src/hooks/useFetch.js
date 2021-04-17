import { useEffect, useState } from 'react';

export const useFetch = url => {
    const [data, setState] = useState();

    const addData = body => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json =>
                setState(prev => {
                    return [json, ...prev];
                }),
            );
    };

    const removeData = id => {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
        }).then(() => setState(prev => prev.filter(d => d.id !== id)));
    };

    useEffect(() => {
        if (!url) {
            return;
        }

        fetch(url)
            .then(result => result.json())
            .then(result => setState(result));
    }, [url, setState]);

    return [data, addData, removeData];
};
