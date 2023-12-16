import {FunctionComponent} from 'react'
import {useGetProjects} from '../../api/projects.ts'
import ErrorMessage from '../utils/ErrorMessage.tsx'

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {

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
                {
                    projects?.map(project => (
                        <div key={project.id}>
                            <p>{project.name}</p>
                            <p>{project.category?.name}</p>
                            <p>{project.customer?.name}</p>
                            <ul>
                                {
                                    project.tags?.map(pq=>(
                                        <li key={`tag${pq.tag?.id}`}>- {pq.tag?.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </>

    )
}

export default Home
