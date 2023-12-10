import {FunctionComponent, useContext} from 'react'
import {ThemeContext} from './providers/ThemeProvider.tsx'
import {Button} from '@nextui-org/react'

const ThemeSwitcher: FunctionComponent = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            The current theme is: {theme}
            <Button onClick={() => setTheme('light')}>Light Mode</Button>
            <Button onClick={() => setTheme('purple-dark')}>Dark Mode</Button>
        </div>
    )
}

export default ThemeSwitcher
