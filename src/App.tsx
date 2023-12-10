import './App.css'
import Navigation from './components/navigation/Navigation.tsx'
import Routing from './components/navigation/Routing.tsx'
import {NextUIProvider} from '@nextui-org/react'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {ThemeContext} from './providers/ThemeProvider.tsx'

function App() {
    const navigate = useNavigate()
    const {theme} = useContext(ThemeContext)
  return (
      <main className={`${theme} text-foreground bg-background`}>
          <Navigation/>
          <NextUIProvider navigate={navigate}>
            <Routing/>
          </NextUIProvider>
      </main>
  )
}

export default App
