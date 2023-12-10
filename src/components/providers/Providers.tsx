import {FunctionComponent, PropsWithChildren} from 'react'
import {NextUIProvider} from '@nextui-org/react'
import ThemeProvider from './ThemeProvider.tsx'
import {useNavigate} from 'react-router-dom'

const Providers: FunctionComponent<PropsWithChildren> = ({children}) => {

    const navigate = useNavigate()
    return (
        <NextUIProvider navigate={navigate}>
            <ThemeProvider defaultTheme="purple-dark">
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}

export default Providers
