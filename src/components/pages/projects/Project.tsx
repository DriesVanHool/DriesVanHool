import {FunctionComponent} from 'react'
import {IProject} from '../../../models/IProject.ts'

interface ProjectsProps {
    project: IProject
}

const Project: FunctionComponent<ProjectsProps> = ({project}) => {
    return (
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
    )
}

export default Project
