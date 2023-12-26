import {FunctionComponent, ReactElement, ReactNode} from 'react'
import {Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react'
import {MdOutlineDashboardCustomize, MdOutlineVideogameAsset, MdOutlineWeb} from 'react-icons/md'
import {motion} from 'framer-motion'
import SecondayTitle from '../../elements/SecondayTitle.tsx'

interface ServiceCardProps {
    title: string,
    description: ReactElement,
    styling?: string | null,
    icon: ReactNode
}

const Services: FunctionComponent = () => {

    const ServiceCard:FunctionComponent<ServiceCardProps>  = ({title, description, icon, styling}) => {
        return (
            <Card isBlurred
              className={`border-none bg-default-100/50 col-span-2 sm:col-span-1 p-1 ${styling}`}
              shadow="sm">
            <CardHeader className="text-2xl flex gap-3">
                <div className="rounded-full p-3 bg-secondary bg-opacity-20 text-primary text-3xl">{icon}</div>
                <p>{title}</p>
            </CardHeader>
            <CardBody>
                {description}
            </CardBody>
            <CardFooter>
            </CardFooter>
        </Card>
        )
    }

    return (
        <div id="services" >
            <motion.div
                initial={{ translateX: -150 }}
                whileInView={{ translateX: 0 }}
            >
                <SecondayTitle title={"I make ..."} styling={"text-left pb-10 pr-10"}/>
            </motion.div>
            <div className="w-full gap-6 grid grid-cols-2">
                <ServiceCard title={'Custom software'}
                             description={<p>I have a specialization in the development of distinctive and customized web-based software solutions. My expertise revolves around the creation of bespoke applications designed to meet the unique requirements and challenges faced by clients. With a focus on web-based functionality, I excel in streamlining business processes, enhancing online interactions, and addressing specific functionalities. My skill set allows me to craft web applications that precisely cater to the individual needs of businesses or individuals, ensuring tailored solutions for optimal performance and efficiency.</p>}
                             styling={"row-span-2"}
                             icon={<MdOutlineDashboardCustomize />}/>
                <ServiceCard title={'Websites & shops'}
                             description={<p>I specialize in crafting online experiences, from designing and developing websites to creating e-commerce platforms. My expertise extends from visually appealing websites to secure virtual storefronts, helping clients establish a strong digital presence and enhance online commerce.</p>}
                             icon={<MdOutlineWeb/>}/>

                <ServiceCard title={'Digital experiences'}
                             description={<p>I design digital experiences beyond websites and apps, from engaging games to immersive 3D environments. My goal is to offer diverse and interactive online solutions, whether for entertainment, user engagement, or creating captivating virtual spaces, enhancing the overall online experience.</p>}
                             icon={<MdOutlineVideogameAsset  />}/>
            </div>
        </div>
    )
}

export default Services
