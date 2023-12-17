import {FunctionComponent} from 'react'
import {CSSProperties} from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

interface AboutProps {

}

const mask: CSSProperties = {
    maskImage: 'linear-gradient(to top, transparent 5%, rgba(0, 0, 0, 0.25) 10%, rgba(0, 0, 0, 0.5) 15%, rgba(0, 0, 0, 0.75) 20%, black 100%)'
}

const About: FunctionComponent<AboutProps> = () => {
    return (
        <div id="about" className="relative isolate overflow-hidden flex py-20" color="background">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">About</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-6xl font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            <a href="#"><FaGithub /></a>
                            <a href="#"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            <img         src="dries.png"
                         alt=""
                         className="inset-0 -z-10 sm:block -mt-20"
                         style={mask}/>
        </div>
    )
}

export default About
