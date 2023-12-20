import {FunctionComponent} from 'react'
import {IProject} from '../../../models/IProject.ts'
import {Card, Image} from '@nextui-org/react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import SecondayTitle from '../../elements/SecondayTitle.tsx'

interface ProjectGridProps {
    projects: IProject[]
}

const ProjectGrid: FunctionComponent<ProjectGridProps> = ({projects}) => {
    const navigate = useNavigate()
    const featuredProjects:IProject[] = projects.filter(p=>p.featured)

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


    const ImageCard = (project: IProject, style: string) => {
        return (
            <Card className={`col-span-12 sm:col-span-4 h-[300px] cursor-pointer ${style}`}>
                <ImageContainer onClick={()=>navigate(`/projects/${project.slug}`)}>
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

    return (
        <>
            <SecondayTitle title={"Projects"} styling={"text-right pb-10 pr-10"}/>
            <div  id="projects" className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
                {
                    featuredProjects.map(project => (
                        featuredProjects.indexOf(project)<=4? (
                            ImageCard(project, featuredProjects.indexOf(project)===0?"sm:col-span-7":"sm:col-span-5")
                        ):null
                    ))
                }
                <div className="col-span-12 sm:col-span-2 text-center text-7xl flex justify-center items-center">
                        ...
                </div>
            </div>
        </>
    )
}

export default ProjectGrid
