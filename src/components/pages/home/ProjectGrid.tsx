import {FunctionComponent} from 'react'
import {IProject} from '../../../models/IProject.ts'
import {Card, Image} from '@nextui-org/react'
import Loader from '../../utils/Loader.tsx'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

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
        featuredProjects.length>=4?(
            <>
                <h2 className="text-5xl font-bold tracking-tight text-white sm:text-5xl text-center pb-10">Projects</h2>
                <div  id="projects" className="w-full gap-2 grid grid-cols-12 grid-rows-2 px-8">
                    {
                        ImageCard(featuredProjects[0], "sm:col-span-4")
                    }
                    {
                        ImageCard(featuredProjects[1], "sm:col-span-4")
                    }
                    {
                        ImageCard(featuredProjects[2], "sm:col-span-4")
                    }
                    {
                        ImageCard(featuredProjects[3], "sm:col-span-7")
                    }
                    <div className="col-span-12 sm:col-span-5 text-center text-5xl  align-middle">
                        More ...
                    </div>
                </div>
            </>
        ):<Loader/>

    )
}

export default ProjectGrid
