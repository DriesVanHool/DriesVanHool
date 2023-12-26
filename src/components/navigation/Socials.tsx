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
                href={import.meta.env.VITE_URL_GITHUB}
                className={styling??''}
            >
                <FaGithub />
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                href={import.meta.env.VITE_URL_LINKEDIN}
                className={styling??''}
            >
                <FaLinkedin />
            </motion.a>
        </>
    )
}

export default Socials
