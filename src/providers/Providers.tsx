import {FunctionComponent, PropsWithChildren} from 'react'
import {NextUIProvider} from '@nextui-org/react'
import ThemeProvider from './ThemeProvider.tsx'

const Providers: FunctionComponent<PropsWithChildren> = ({children}) => {
    return (
        <NextUIProvider>
            <ThemeProvider defaultTheme="purple-dark">
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}

export default Providers
