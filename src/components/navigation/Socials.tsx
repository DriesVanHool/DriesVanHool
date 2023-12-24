import {FunctionComponent} from 'react'
import {motion} from 'framer-motion'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

interface SocialsProps {
    styling?:string | null
}

const Socials: FunctionComponent<SocialsProps> = ({styling}) => {
    return (
        <>
            <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/DriesVanHool"
                className={styling??''}
            >
                <FaGithub />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/dries-van-hool-371202195/"
                className={styling??''}
            >
                <FaLinkedin />
            </motion.a>
        </>
    )
}

export default Socials
