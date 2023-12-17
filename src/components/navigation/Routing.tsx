import {FunctionComponent} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import Home from '../pages/home/Home.tsx'
import ProjectDetail from '../pages/projects/ProjectDetail.tsx'
import PostDetail from '../pages/blog/PostDetail.tsx'
import Blog from '../pages/blog/Blog.tsx'
import ProjectOverview from '../pages/projects/ProjectOverview.tsx'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path="/projects" element={<Outlet/>}>
                <Route index element={<ProjectOverview/>}/>
                <Route path=":name" element={<ProjectDetail/>}/>
            </Route>
            <Route path="/blog" element={<Outlet/>}>
                <Route index element={<Blog/>}/>
                <Route path=":slug" element={<PostDetail/>}/>
            </Route>
        </Routes>
    )
}

export default Routing
