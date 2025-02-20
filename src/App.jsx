import React from 'react'
import NavigationBar from './components/NavigationBar'
import Home from './components/sections/Home'
import Projects from './components/sections/Projects'
import Cards from './components/Cards'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <NavigationBar/>
      <Home/>
      <Projects/>
      <Skills />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App