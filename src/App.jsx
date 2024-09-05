
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Herosection/Hero'
import Program from './Components/Programs/Program'
import Reason from './Components/Reasons/Reason'
import Plan from './Components/Plan/Plan'
import Testimonial from './Components/Testimonial/Testimonial'
import Email from './Components/Email/Email'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <>
   <div className='bg-yellow' id='home'>
   <Header/>
   <Hero/>
   </div>
   <div className='below-gym'>
   < Program/>
   <Reason/>
   <Plan/>
   <Testimonial/>
   <Email/>
   <Footer/>
   </div>
    </>
  )
}

export default App
