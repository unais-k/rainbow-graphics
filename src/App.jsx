import './app.scss'
import Navbar from './Components/Navbar/Navbar'
import Test from './Test'
import RainbowHome from './Components/RainbowHome/RainbowHome'
import AboutPage from './Components/AboutPage/AboutPage'
import Works from './Components/Works/Works'
import { Parallax } from 'react-parallax';
import Contact from './Components/Contacts/Contact'



function App() {
  return (
    <>
      <div>
        <section id='Home'>
          <Navbar />
          <RainbowHome />
        </section>
        <section ><AboutPage /></section>
        <Works />
        <section id='Contact Us'><Contact /></section>
      </div>
    </>
  )
}

export default App
