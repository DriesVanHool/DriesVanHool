import {FunctionComponent} from 'react'
import {useGetProjects} from '../../../api/projects.ts'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import Project from './Project.tsx'

interface ProjectOverviewProps {

}

const ProjectOverview: FunctionComponent<ProjectOverviewProps> = () => {
    const {data: projects, isError: projectError} = useGetProjects()

    if (projectError) {
        return (
            <ErrorMessage>
                <p>Oei</p>
            </ErrorMessage>
        )
    }
    return (
        <>
            <div id="projects">
                {projects?.map(project => (<Project project={project}/>))}
            </div>
        </>
    )
}

export default ProjectOverview
