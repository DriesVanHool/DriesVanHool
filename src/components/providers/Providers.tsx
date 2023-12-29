import {FunctionComponent, PropsWithChildren} from 'react'
import {NextUIProvider} from '@nextui-org/react'
import ThemeProvider from './ThemeProvider.tsx'
import {useNavigate} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
            refetchOnWindowFocus: import.meta.env.PROD,
        },
    },
})

const Providers: FunctionComponent<PropsWithChildren> = ({children}) => {
    const navigate = useNavigate()

    //Search saved theme. If no theme is found, set theme according to user preferences
    let theme = localStorage.getItem('theme')
    if (!theme){
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        theme = prefersDark?'blue-dark':'blue-light'
        localStorage.setItem("theme", theme)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider navigate={navigate}>
                <ThemeProvider defaultTheme={theme}>
                    {children}
                </ThemeProvider>
            </NextUIProvider>
        </QueryClientProvider>
    )
}

export default Providers
