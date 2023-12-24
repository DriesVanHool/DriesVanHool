import {FunctionComponent, useContext} from 'react'
import {Progress} from '@nextui-org/react'
import {ThemeContext} from '../providers/ThemeProvider.tsx'

const LoadingPage: FunctionComponent = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme} text-foreground bg-background relative flex flex-col h-100 min-h-screen justify-center items-center`}>
            <Progress
                size="lg"
                isIndeterminate
                color="warning"
                aria-label="Loading..."
                className="max-w-md"
            />
            <p className="text-center mt-3">Loading...</p>
        </div>
    );
}

export default LoadingPage
