import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Providers from './components/providers/Providers.tsx'
import LoadingPage from './components/utils/LoadingPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <BrowserRouter>
                <Providers>
                    <Suspense fallback={<LoadingPage/>}>
                        <App />
                    </Suspense>
                </Providers>
            </BrowserRouter>
    </React.StrictMode>,
)
