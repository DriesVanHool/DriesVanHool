import {FunctionComponent} from 'react'
import {useGetProjects} from '../../../api/projects.ts'
import ErrorMessage from '../../utils/ErrorMessage.tsx'
import {Avatar, Button, Card, CardBody, CardFooter, CardHeader, Spacer} from '@nextui-org/react'
import About from './About.tsx'
import Banner from './Banner.tsx'
import ProjectGrid from './ProjectGrid.tsx'
import CustomerCarousel from './CustomerCarousel.tsx'
import Contact from './Contact.tsx'
import ScrollToAnchor from '../../navigation/ScrollToAnchor.tsx'

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
            <Card className="max-w-[340px]">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                            <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                        </div>
                    </div>
                    <Button
                        color="primary"
                        radius="full"
                        size="sm"
                    >
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>
                        Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                    </p>
                    <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4</p>
                        <p className=" text-default-400 text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">97.1K</p>
                        <p className="text-default-400 text-small">Followers</p>
                    </div>
                </CardFooter>
            </Card>

            <Contact/>
            <Spacer y={space}/>
            <CustomerCarousel customers={customers}/>
            <Spacer y={space}/>
            <ScrollToAnchor/>
        </>

    )
}

export default Home
