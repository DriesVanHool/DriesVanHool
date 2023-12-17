import {FunctionComponent} from 'react'
import {useGetProjects} from '../../../api/projects.ts'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {Spacer} from '@nextui-org/react'
import About from './About.tsx'
import Banner from './Banner.tsx'
import ProjectGrid from './ProjectGrid.tsx'
import CustomerCarousel from './CustomerCarousel.tsx'
import Contact from './Contact.tsx'

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {

    const {data: projects, isError: projectError} = useGetProjects()
    const space = 40

    if (projectError) {
        return (
            <ErrorMessage>
                <p>Oei</p>
            </ErrorMessage>
        )
    }

    const customers = [
        {
            id: 1,
            name: "Test",
            logo: "vite.svg"
        },
        {
            id: 2,
            name: "Test",
            logo: "vite.svg"
        },
        {
            id: 3,
            name: "Test",
            logo: "vite.svg"
        },
        {
            id: 4,
            name: "Test",
            logo: "vite.svg"
        }
    ]


    return (
        <>
            <Spacer y={space} />
            <Banner/>
            <Spacer y={space} />
            <About/>
            <Spacer y={space} />
            <ProjectGrid projects={projects??[]}/>
            <Spacer y={space} />
            <Contact/>
            <Spacer y={space}/>
            <CustomerCarousel customers={customers}/>
            <Spacer y={space}/>
        </>

    )
}

export default Home
