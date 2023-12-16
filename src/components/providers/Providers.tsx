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
    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider navigate={navigate}>
                <ThemeProvider defaultTheme="purple-dark">
                    {children}
                </ThemeProvider>
            </NextUIProvider>
        </QueryClientProvider>
    )
}

export default Providers
