import {FunctionComponent, lazy, Suspense} from 'react'
import {motion} from 'framer-motion'
import Socials from '../../navigation/Socials.tsx'
import {Canvas} from '@react-three/fiber'
import {Spinner} from '@nextui-org/react'

interface AboutProps {

}

const HeadModel = lazy(() => import('./HeadModel.tsx'));

const About: FunctionComponent<AboutProps> = () => {
    return (
        <>
            <div id="about" className="relative isolate overflow-hidden flex py-20" color="background">
                {/*Add 3D model with loader*/}
                <div className='w-[450px] h-[450px]'>
                    <Suspense fallback={<Spinner className='w-full h-full' size="lg" color={'warning'}/>}>
                        <Canvas style={{ width: '100%', height: '100%' }}>
                            <HeadModel/>
                        </Canvas>
                    </Suspense>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <motion.div
                            initial={{ translateX: 150 }}
                            whileInView={{ translateX: 0 }}
                        >
                            <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">About</h2>
                        </motion.div>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.<br/><br/>
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.<br/><br/>
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-4 gap-x-8 gap-y-6 text-6xl font-semibold leading-7 text-white md:flex lg:gap-x-10">
                            <Socials/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
