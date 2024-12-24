import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Collection from './components/Collection'
import Features from './components/Features'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Features />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  )
}

export default App
