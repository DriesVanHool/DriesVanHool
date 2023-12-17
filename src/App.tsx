import './App.css'
import Navigation from './components/navigation/Navigation.tsx'
import Routing from './components/navigation/Routing.tsx'
import {useContext} from 'react'
import {ThemeContext} from './components/providers/ThemeProvider.tsx'
import Footer from './components/navigation/Footer.tsx'

function App() {
    const {theme} = useContext(ThemeContext)
  return (
      <main className={`${theme} text-foreground bg-background relative flex flex-col h-100 min-h-screen`}>
          <Navigation/>
          <div className="container mx-auto max-w-7xl min-w-screen-md pt-16 px-6 flex-grow row-auto">
              <Routing/>
          </div>
          <Footer/>
      </main>
  )
}

export default App
