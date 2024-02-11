import {FunctionComponent, PropsWithChildren, ReactNode} from 'react'
import {Card, CardBody, CardFooter, CardHeader} from '@nextui-org/react'
import {MdOutlineDashboardCustomize, MdOutlineVideogameAsset, MdOutlineWeb} from 'react-icons/md'
import {motion} from 'framer-motion'
import SecondayTitle from '../../elements/SecondayTitle.tsx'

interface ServiceCardProps extends PropsWithChildren{
    title: string,
    styling?: string | null,
    icon: ReactNode
}

const Services: FunctionComponent = () => {

    const ServiceCard:FunctionComponent<ServiceCardProps> = ({title, icon, styling, children}) => {
        return (
            <Card isBlurred
              className={`border-none bg-default-100/50 col-span-2 sm:col-span-1 p-1 ${styling}`}
              shadow="sm">
            <CardHeader className="text-2xl flex gap-3">
                <div className="rounded-full p-3 bg-secondary bg-opacity-20 text-primary text-3xl">{icon}</div>
                <p>{title}</p>
            </CardHeader>
            <CardBody>
                {children}
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
                <ServiceCard title={'Custom software'} styling={"row-span-2"} icon={<MdOutlineDashboardCustomize />}>
                    <p>
                        Crafting <strong>tailored</strong> solutions for your unique needs. Imagine software designed exclusively for your business, streamlining operations, and boosting efficiency.<br/><br/>
                        From robust databases to intuitive interfaces, I specialize in turning your requirements into functional, user-friendly applications.
                        Whether you're in need of a <strong>scalable system or a custom application</strong> to optimize daily tasks, I bring my expertise to the table.<br/><br/>
                        My commitment is to deliver software that not only meets but exceeds your expectations, ensuring a seamless integration into your workflow.
                        Let's elevate your business with software that's as distinctive as your vision.
                    </p>
                </ServiceCard>
                <ServiceCard title={'Websites & shops'} icon={<MdOutlineWeb/>}>
                    <p>
                        Creating websites and online shops that captivate audiences and drive results.In the digital landscape, your online presence is your first impression.<br/>
                        From responsive designs that adapt seamlessly to various devices to <strong>intuitive e-commerce platforms</strong>, I combine aesthetics with functionality.
                    </p>
                </ServiceCard>
                <ServiceCard title={'Digital experiences'} icon={<MdOutlineVideogameAsset  />}>
                    <p>
                        Designing digital experiences and immersive <strong>multimedia content</strong>. Whether it's a small interactive game, or a multimedia campaign, I fuse technology with creativity to make a lasting impact.
                    </p>
                </ServiceCard>
            </div>
        </div>
    )
}

export default Services
