import {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.tsx'

const Routing: FunctionComponent = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
    )
}

export default Routing
