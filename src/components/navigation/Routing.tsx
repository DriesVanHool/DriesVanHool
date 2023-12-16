import {FunctionComponent} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.tsx'
import Projects from '../pages/projects/Projects.tsx'
import ProjectDetail from '../pages/projects/ProjectDetail.tsx'
import Posts from '../pages/blog/Posts.tsx'
import PostDetail from '../pages/blog/PostDetail.tsx'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/projects" element={<Outlet/>}>
                <Route index element={<Projects/>}/>
                <Route path=":name" element={<ProjectDetail/>}/>
            </Route>
            <Route path="/blog" element={<Outlet/>}>
                <Route index element={<Posts/>}/>
                <Route path=":slug" element={<PostDetail/>}/>
            </Route>
        </Routes>
    )
}

export default Routing
