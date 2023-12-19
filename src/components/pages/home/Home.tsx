import {FunctionComponent} from 'react'
import {useGetProjects} from '../../../api/projects.ts'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {Spacer} from '@nextui-org/react'
import About from './About.tsx'
import Banner from './Banner.tsx'
import ProjectGrid from './ProjectGrid.tsx'
import CustomerCarousel from './CustomerCarousel.tsx'
import Contact from './Contact.tsx'
import ScrollToAnchor from '../../navigation/ScrollToAnchor.tsx'
import {useGetCustomers} from '../../../api/customers.ts'

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const {data: projects, isError: projectError} = useGetProjects()
    const {data: customers, isError: customerError} = useGetCustomers()
    const space = 40

    if (projectError || customerError) {
        return (
            <ErrorMessage>
                <p>Oei</p>
            </ErrorMessage>
        )
    }

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
            <CustomerCarousel customers={customers??[]}/>
            <Spacer y={space}/>
            <ScrollToAnchor/>
        </>

    )
}

export default Home
