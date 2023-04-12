import React, { useEffect, useState } from 'react';
export function useFetch<T,>(url: string, initialState: T) {
    const [data, setData] = useState<T>(initialState);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }, [url]);

    return data;
}