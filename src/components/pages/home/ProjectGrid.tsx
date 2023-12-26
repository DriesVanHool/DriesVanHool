import {FunctionComponent} from 'react'
import {IProject} from '../../../models/IProject.ts'
import {Card, Image, Link} from '@nextui-org/react'
import styled from 'styled-components'
import SecondayTitle from '../../elements/SecondayTitle.tsx'
import {motion} from 'framer-motion'

interface ProjectGridProps {
    projects: IProject[]
}

const ProjectTitle = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.4s ease;
    `;

const ImageContainer = styled.div`
      height: 100%;
      img {
        transition: 0.5s ease;
      }

      &:hover img {
        filter: blur(2px) brightness(40%);
      }

      &:hover ${ProjectTitle} {
        opacity: 1;
      }
    `;

const ProjectGrid: FunctionComponent<ProjectGridProps> = ({projects}) => {
    const featuredProjects:IProject[] = projects.filter(p=>p.featured)
    const dotClasses = "bg-primary w-3 h-3 mx-1 rounded-full block"
    const dotVariant = {
        initial: {
            scale: 1
        },
        animate: {
            scale: [1,1.5,1]
        }}

    const dotTransition = {
        duration:.3,
        ease: "easeInOut"
    }

    //Project images with link to detailpage. Style mainly used for different colspans
    const ImageCard = (project: IProject, style: string) => {
        return (
            <Card key={project.id} className={`col-span-12 sm:col-span-4 h-[300px] cursor-pointer ${style}`}>
                <ImageContainer as={Link} href={`/projects/${project.slug}`}>
                        <Image
                            isZoomed
                            isBlurred
                            removeWrapper
                            alt={project.name}
                            className="z-0 h-full w-full object-cover"
                            src={project.thumbnail??''}
                        />
                    <ProjectTitle className="text-2xl text-center text-foreground">{project.name}</ProjectTitle>
                </ImageContainer>
            </Card>
        )
    }

    //Project overview page navigation with animated staggered dots.
    const MoreProjects = () =>{
        return (
            <div className="col-span-12 sm:col-span-2 text-center text-7xl flex justify-center items-center">
                <motion.div
                    className="flex space-x-3 cursor-pointer"
                    variants={{
                        initial: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        },
                        animate: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }}}
                    initial="initial"
                    whileHover="animate"
                >
                    <Link href={"/projects"} className="align-bottom">
                        <span className="text-4xl mr-1">More</span>
                        <motion.span
                            variants={dotVariant}
                            transition={dotTransition}
                            className={dotClasses}
                        />
                        <motion.span
                            variants={dotVariant}
                            transition={dotTransition}
                            className={dotClasses}
                        />
                        <motion.span
                            variants={dotVariant}
                            transition={dotTransition}
                            className={dotClasses}
                        />
                    </Link>
                </motion.div>
            </div>
        )
    }

    return (
        <div id="projects" >
            <motion.div
                initial={{ translateX: 150 }}
                whileInView={{ translateX: 0 }}
            >
                <SecondayTitle title={"Projects"} styling={"text-right pb-10 pr-10"}/>
            </motion.div>
            <div className="w-full gap-6 grid grid-cols-12 grid-rows-2 px-8">
                {
                    featuredProjects.map(project => (
                        featuredProjects.indexOf(project)<=4? (
                            ImageCard(project, featuredProjects.indexOf(project)===0?"sm:col-span-7":"sm:col-span-5")
                        ):null
                    ))
                }
                <MoreProjects/>
            </div>
        </div>
    )
}

export default ProjectGrid
