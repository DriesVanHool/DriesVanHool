import {createContext, FunctionComponent, ReactNode, useState} from 'react'


interface ThemeProvider {
    defaultTheme: string
    children: ReactNode
}

interface ThemeContextProps {
    theme: string
    setTheme: (theme: string) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'purple-dark',
    setTheme: () => {
        console.warn('No implementation had been provided for ThemeContext.setTheme()')
    }
});
const ThemeProvider: FunctionComponent<ThemeProvider> = ({defaultTheme, children}) => {
    const [theme, setTheme] = useState<string>(defaultTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
