import React, { useEffect, useState } from 'react';
import { useFetch } from './hooks/useFetch';

interface TodoItem {
    id: number,
    userId: number,
    title: string,
    completed: boolean
}

export const Application: React.FunctionComponent = () => {
    const data = useFetch<TodoItem[]>('https://jsonplaceholder.typicode.com/todos',[])
    return (
        <div>
            Data Received
            <hr />
            {
                data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <p>
                                            Item Id: <strong>{item.id}</strong>
                                            <br />
                                            Completed: <strong>{item.completed ? 'Yes' : 'No'}</strong>
                                            <br />
                                            title: <strong>{item.title}</strong>
                                            <br />
                                            User Id: <strong>{item.userId}</strong>
                                        </p>
                                        <hr />
                                    </div>
                                )
                            })
                            :
                            <p>Loading Data</p>
            }
        </div>
    )
}
