import {FunctionComponent, useContext} from 'react'
import {Button, Link} from '@nextui-org/react'
import {useScroll, motion, useTransform} from 'framer-motion'
import { ThemeContext } from '../../providers/ThemeProvider.tsx'

interface BannerProps {

}

const Banner: FunctionComponent<BannerProps> = () => {
    const {theme} = useContext(ThemeContext)
    //Scroll control form background circle
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -200 * 5]);

    return (
        <div id="banner" onClick={()=>console.log(scrollYProgress)} className="relative isolate h-[500px] sm:h-[600px] flex flex-col justify-center items-center max-w-screen" >
                <div className="mx-0 sm:max-w-2xl z-10">
                    <h1 className={`text-5xl sm:text-6xl font-bold tracking-tight text-foreground text-center z-0 ${theme==='blue-light'?'mix-blend-overlay':'mix-blend-exclusion'}`}>Full-stack development and digital creations</h1>
                    <div className="flex justify-center pt-16">
                        <Button color="primary" size={"lg"} variant="bordered" as={Link} href="/#projects">See what I do</Button>
                    </div>
                    <motion.div style={{ y: y }}  className={`absolute top-20 left-10 md:top-24 md:left-52 sm:left-20 sm:top-36 w-40 h-40 md:w-80 md:h-80 -z-30 rounded-full ${theme==='blue-light'?'bg-focus':'bg-foreground'}`}></motion.div>
                </div>
        </div>
    )
}

export default Banner
