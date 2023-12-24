import {FunctionComponent} from 'react'
import {useParams} from 'react-router-dom'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {useGetProjectBySlug} from '../../../api/projects.ts'

interface ProjectDetailProps {

}

const ProjectDetail: FunctionComponent<ProjectDetailProps> = () => {
    const {slug} = useParams()
    const {data: project, isError: projectError} = useGetProjectBySlug(slug as string)

    if (projectError) {
        return (
            <ErrorMessage>
                <p>Couldn't load data</p>
            </ErrorMessage>
        )
    }
    return (
        <div>
            {project?.name}
        </div>
    )
}

export default ProjectDetail
