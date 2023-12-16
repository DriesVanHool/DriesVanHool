import {FunctionComponent, Suspense} from 'react'
import {useParams} from 'react-router-dom'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import LoadingPage from '../../utils/LoadingPage.tsx'
import {useGetProjectByTitle} from '../../../api/projects.ts'

interface ProjectDetailProps {

}

const ProjectDetail: FunctionComponent<ProjectDetailProps> = () => {
    const {name} = useParams()
    const {data: project, isError: projectError} = useGetProjectByTitle(name as string)

    if (projectError) {
        return (
            <ErrorMessage>
                <p>Oei</p>
            </ErrorMessage>
        )
    }
    return (
        <Suspense fallback={<LoadingPage/>}>
            <div>
                {project?.name}
            </div>
        </Suspense>
    )
}

export default ProjectDetail
