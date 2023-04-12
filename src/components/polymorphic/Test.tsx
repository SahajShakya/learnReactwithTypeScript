import React from 'react'
type TextOwnProps<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    test?: E
}
type TestProps<E extends React.ElementType> 
    = TextOwnProps<E> & 
        Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>
export const Test = <E extends React.ElementType='div'>
    ({ size, color, children, test }: TestProps<E>) => {
    const Component = test || 'div'
    return (
        <div className={`class-with=${size}-${color}`}>{children}</div>
    )
}
