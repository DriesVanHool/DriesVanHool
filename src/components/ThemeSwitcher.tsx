import {FunctionComponent, useContext} from 'react'
import {ThemeContext} from './providers/ThemeProvider.tsx'
import {GoMoon, GoSun} from 'react-icons/go'

const ThemeSwitcher: FunctionComponent = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <div  className="text-primary text-xl cursor-pointer hover:text-secondary">
            {
                theme==='light'?(
                    <GoMoon onClick={() => setTheme('purple-dark')}/>
                ):<GoSun onClick={() => setTheme('light')}/>
            }
        </div>
    )
}

export default ThemeSwitcher
