import {FunctionComponent, useState} from 'react'
import {useGetProjects} from '../../../api/projects.ts'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {Chip, Listbox, ListboxItem} from '@nextui-org/react'
import ListboxWrapper from '../../elements/ListboxWrapper.tsx'
import {IProject} from '../../../models/IProject.ts'
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom'

const ProjectOverview: FunctionComponent = () => {
    const navigate = useNavigate()
    const {data: projects, isError: projectError} = useGetProjects()
    const [hoverProject, setHoverProject] = useState<IProject | null>(null)

    if (projectError) {
        return (
            <ErrorMessage>
                <p>Oei</p>
            </ErrorMessage>
        )
    }
    return (
        <>
            <h1 className="text-6xl font-bold tracking-tight text-foreground sm:text-6xl mb-10">Projects</h1>
            <div className="w-full gap-10 grid grid-cols-2">
                <ListboxWrapper styling={'col-span-2 sm:col-span-1'}>
                    {/*NextUI mapping handeled with listbox items*/}
                    <Listbox variant="faded"
                             items={projects}
                             classNames={{
                                 base: "h-[500px]",
                                 list: "max-h-[500px] overflow-scroll",
                             }}
                             onAction={(key) => navigate('/projects/'+key)}
                             aria-label="Project list">
                        {(project) => (
                            <ListboxItem key={project.slug} textValue={project.name} onMouseOver={()=>setHoverProject(project)} onMouseOut={()=>setHoverProject(null)}>
                                <p className="text-xl">{project.name}</p>
                                <div className="flex flex-wrap gap-4 py-3 justify-end">
                                    {
                                        project.tags?.map(projectTag=>(
                                                <Chip key={`tag${projectTag.tag?.id}`} size="sm" color={projectTag.tag?.color}>{projectTag.tag?.name}</Chip>
                                            )
                                        )
                                    }
                                </div>
                            </ListboxItem>
                        )}
                    </Listbox>
                </ListboxWrapper>
                <div id="projectThumbnail" className="relative hidden sm:block h-[500px] col-span-1">
                    {
                        hoverProject?(
                            <motion.div
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                transition={{ duration: 1 }}
                                className="flex items-center justify-center h-full w-full"
                            >
                                <img src={hoverProject?.thumbnail??""}
                                     alt={hoverProject.name}
                                     width="100%"
                                     height="100%"
                                     className="object-cover h-full rounded-lg"
                                />
                            </motion.div>
                        ):null
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectOverview
