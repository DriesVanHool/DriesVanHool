import {FunctionComponent} from 'react'
import {IProject} from '../../../models/IProject.ts'
import {Card, Image, Link} from '@nextui-org/react'
import styled from 'styled-components'
import SecondayTitle from '../../elements/SecondayTitle.tsx'
import {motion} from 'framer-motion'
import {IoIosMore} from 'react-icons/io'

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
                            className="z-0 w-full h-full object-cover"
                            src={project.thumbnail??''}
                        />
                    <ProjectTitle className="text-2xl text-center text-secondary">{project.name}</ProjectTitle>
                </ImageContainer>
            </Card>
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
            <div className="w-full gap-5 grid grid-cols-12 grid-rows-2 mx-0 sm:px-8">
                {
                    projects.map(project => (
                        projects.indexOf(project)<4? (
                            ImageCard(project, projects.indexOf(project)===0?"sm:col-span-7":"sm:col-span-5")
                        ):null
                    ))
                }

                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={"/projects"}
                    className="h-[300px] col-span-12 sm:col-span-2 text-center flex justify-center items-center"
                >
                    <div className="rounded-full p-3 bg-secondary bg-opacity-20 text-primary text-5xl">
                        <IoIosMore />
                    </div>
                </motion.a>
            </div>
        </div>
    )
}

export default ProjectGrid
