import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {useGetProjectBySlug} from '../../../api/projects.ts'
import {Avatar, Button, Image, Link, Tooltip} from '@nextui-org/react'
import {MdPlayArrow} from 'react-icons/md'
import TagChip from '../../elements/TagChip.tsx'
import dries from '../../../assets/dries.png'

interface ProjectDetailProps {

}

const ProjectDetail: FunctionComponent<ProjectDetailProps> = () => {
    const {slug} = useParams()
    const {data: project, isError: projectError} = useGetProjectBySlug((slug as string))

    if (projectError) {
        return (
            <ErrorMessage>
                <p>Couldn't load data</p>
            </ErrorMessage>
        )
    }

    return (
        <div id="project" className="relative isolate overflow-hidden pb-20" color="background">
            <img src={project?.banner_image??""}
                 alt={"Project banner"}
                 className="object-cover rounded-t-lg w-screen h-[300px]"
            />
            <div className="border-1 rounded-b-lg border-primary-200 p-10 space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">{project?.name}</h1>
                <p>{project?.description}</p>
            </div>
            <div className="p-10 grid grid-cols-2 w-full justify-between gap-10 border-1 rounded-lg border-primary-200 mt-6">
                <div className="col-span-2 sm:col-span-1">
                    <h2 className="text-2xl font-bold tracking-tight text-primary">Toolkit</h2>
                    {
                        project?.tags && project?.tags?.length>0?(
                            <div className="border rounded-lg border-primary-200 flex flex-wrap my-6 p-6 gap-4">
                                {
                                    project.tags.map(projectTag=>(
                                        <TagChip key={`tag${projectTag.tag?.id}`} tag={projectTag.tag}/>
                                    ))
                                }
                            </div>
                        ):<p className="p-6">Looks like there should be some tools here...</p>
                    }
                    <h2 className="text-2xl font-bold tracking-tight text-primary pb-6">{project?.customer?'Customer':"Personal project"}</h2>
                    <Tooltip
                        placement={"right-end"}
                        content={project?.customer?project?.customer.name:"Dries Van Hool"}
                        color="foreground"
                    >
                        {
                            project?.customer?(
                                <Image src={project.customer.logo??""} alt={project?.customer.name} width={200} className="m-6"/>
                            ): <Avatar isBordered color="primary" src={dries} alt="Dries" className="w-28 h-28 text-large m-6" />
                        }
                    </Tooltip>
                </div>
                <div className="sm:mt-14 mb-10 col-span-2 sm:col-span-1 order-first sm:order-last">
                    <Image
                        src={project?.image??""}
                        alt={project?.name}
                    />
                </div>
            </div>
            {
                project?.url && (
                    <Button as={Link} href={project.url} color="primary" className="m-0 mt-14 w-full sm:w-auto sm:mr-10 float-right" variant="bordered" endContent={<MdPlayArrow />}>Go to project</Button>
                )
            }
        </div>
    )
}

export default ProjectDetail
