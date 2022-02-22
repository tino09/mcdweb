import Header from './components/Header';
import Hero from './components/Hero'
import Mission from './components/Mission'
import Footer from '../src/components/Footer'
import Contact from './components/Contact'
import Clients from './components/Clients'
import Swipershow from './components/Swipershow'
import About from './components/About'
import Cta from './components/Cta'
import Waver from './components/Waver'
import Services from './components/Services'
import Projects from './components/Projects'
import Team from './components/Team'


function App() {
  return (
    
      <>
      <Header />
      <Waver/>
      <Hero />
      <About />
      <Services />
      <Mission/> 
      <Clients/>
      <Swipershow/>
      <Projects />
      <Team />
      <Contact />
      <Cta/>
      <Footer />
    
      </>
    
  );
}

export default App;
