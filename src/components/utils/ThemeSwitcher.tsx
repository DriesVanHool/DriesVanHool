import {FunctionComponent, useContext} from 'react'
import {ThemeContext} from '../providers/ThemeProvider.tsx'
import {GoMoon, GoSun} from 'react-icons/go'

const ThemeSwitcher: FunctionComponent = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const changeTheme = () =>{
        let newTheme: string
        if (theme==='blue-light'){
            newTheme = 'blue-dark'
        }else{
            newTheme = 'blue-light'
        }
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <div  className="text-primary text-xl cursor-pointer hover:text-secondary">
            {
                theme==='blue-light'?(
                    <GoMoon onClick={changeTheme}/>
                ):<GoSun onClick={changeTheme}/>
            }
        </div>
    )
}

export default ThemeSwitcher
