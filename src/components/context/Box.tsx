import { useContext, useState } from "react";
import { ThemeContext } from './ThemeContext';

export const Box = () => {
    const theme = useContext(ThemeContext);
    const [ isTure, setIsTure ] = useState(false);

    return (
    <>
        <div style={{ color: isTure ? theme.primary.main : theme.secondary.main }}>Theme Context</div>
        <button onClick={() => setIsTure(!isTure)}>Change Theme and Color</button>
    </>
    )

}