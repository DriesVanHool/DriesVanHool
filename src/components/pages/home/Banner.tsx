import {FunctionComponent} from 'react'
import {Button} from '@nextui-org/react'

interface BannerProps {

}

const Banner: FunctionComponent<BannerProps> = () => {
    return (
        <div id="banner" className="relative isolate overflow-hidden flex justify-center" >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-6xl font-bold tracking-tight text-white sm:text-6xl text-center">Full-stack development and digital creations</h1>
                    <div className="flex justify-center pt-10">
                        <Button color="primary" variant="bordered">See what I do</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
