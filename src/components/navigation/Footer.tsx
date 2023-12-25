import {FunctionComponent} from 'react'
import Socials from './Socials.tsx'

interface FooterProps {

}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <footer className="w-full flex items-center justify-center pb-3 pt-10 gap-2 text-lg">
            <p className="text-default-600">Dries Van Hool</p>
            <Socials styling={"text-primary"}/>
        </footer>
    )
}

export default Footer
