import { createContext } from "react";
import { theme } from "./theme";

type ThemeConextProviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ( {children}: ThemeConextProviderProps ) => {
    return <ThemeContext.Provider value={theme}>{ children }</ThemeContext.Provider>
}