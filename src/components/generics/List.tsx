import { ReactNode } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ListProps<T> {
    items: T[];
    onClick: (value: T) => void;
}

export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items:</h2>
            {items.map((item, index) => {
                return (
                    <div key={index} onClick={() => onClick(item)}>
                        {JSON.stringify(item)}
                    </div>
                );
            })}
        </div>
    );
};