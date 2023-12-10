import {FunctionComponent, useContext} from 'react'
import {ThemeContext} from '../providers/ThemeProvider.tsx'

const ThemeSwitcher: FunctionComponent = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            The current theme is: {theme}
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('purple-dark')}>Dark Mode</button>
        </div>
    )
}

export default ThemeSwitcher
