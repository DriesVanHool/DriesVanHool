import {FunctionComponent} from 'react'
import {CSSProperties} from 'styled-components'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {motion} from 'framer-motion'
import dries from '../../../assets/dries.png'

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
                        <motion.div
                            initial={{ translateX: -150 }}
                            whileInView={{ translateX: 0 }}
                        >
                        <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl">About</h2>
                        </motion.div>
                        <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-4 gap-x-8 gap-y-6 text-6xl font-semibold leading-7 text-white md:flex lg:gap-x-10">
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://github.com/DriesVanHool"
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2 }}
                                href="https://www.linkedin.com/in/dries-van-hool-371202195/"
                            >
                                <FaLinkedin />
                            </motion.a>
                        </div>
                    </div>
                </div>
            <img src={dries}
                 alt=""
                 style={mask}
                 className="hidden sm:block"
            />
        </div>
    )
}

export default About
