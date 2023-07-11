import './App.css';
import Projects from './components/Projects';
import Gototop from './components/Gototop';
import Navbar from './components/Navbar';
// import CustomCursor from './components/CustomCursor';
import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import Intro from './pages/Intro';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import CodingProfiles from './pages/CodingProfiles';

function App() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(true)
  }, [])
  

  return (
    <div className='background_color overflow-hidden prevent-select'>
      <AnimatePresence mode='wait'> 
        {/* <CustomCursor /> */}
        <Intro visible={visible} setVisible={setVisible} />
        {
          !visible && (
            <div>
            <Gototop/>
            <Navbar/>
            <Home/>
            <About/>
            <Projects/>
            <CodingProfiles/>
            <Skills/>
            <Resume/>
            <Footer/>
            </div>
          )
        }
      </AnimatePresence>
    </div>
  );
}


export default App;
