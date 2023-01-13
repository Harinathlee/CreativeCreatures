import About from './components/About/About'
import Contact from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import OurWork from './components/OurWork/OurWork'
import Reviews from './components/Reviews/Review'
import WhyUs from './components/WhyUs/WhyUs'

function App() {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <OurWork />
      <WhyUs />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
}

export default App
