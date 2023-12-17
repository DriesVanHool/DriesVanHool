import {FunctionComponent} from 'react'
import {CircularProgress} from '@nextui-org/react'

interface LoaderProps {

}

const Loader: FunctionComponent<LoaderProps> = () => {
    return (
        <div className="flex gap-4">
            <CircularProgress size="lg" color="default" aria-label="Loading..."/>
        </div>
    )
}

export default Loader
