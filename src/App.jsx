// import { motion } from "framer-motion";
import About from "./components/home/about";
import Expertise from "./components/home/expertise";
import Hero from "./components/home/hero";
import Receive from "./components/home/recieve";
import StartNow from "./components/home/startNow";
import Training from "./components/home/training";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";

import MergedGlows from './assets/images/hero/combined glow-lg.png'
import MergedGlowsSM from './assets/images/hero/combined-glow-sm.webp'


function App() {
  
  return (
    <main className="max-w-[2000px] relative overflow-hidden transition-all ease-in-out duration-300 mx-auto">
      <div className="relative z-30">
        <Header />
        <Hero />
        <Expertise />
        <Training />
        <Receive />
        <StartNow />
        <About />
        <Footer />
      </div>
      {/* <div
        className="fixed w-[380px] md:w-[1400px] mx-auto h-[600px] md:h-[1000px] z-10 inset-0 flex items-center justify-center   opacity-25"
      >
        
       <motion.div
       className="md:block hidden"
      
        animate={{ rotate: 360 }}  
        transition={{
          repeat: Infinity,    
          ease: "linear",         
          duration: 18,         
        }}>
       <img src={MergedGlows} className="w-[1402px]" alt="" />
       </motion.div>
       <motion.div
       className="md:hidden block"
      
        animate={{ rotate: 360 }}  
        transition={{
          repeat: Infinity,   
          ease: "linear",     
          duration: 15,        
        }}
        >
       <img src={MergedGlowsSM} className="w-[500px]" alt="" />
       </motion.div>
      </div>
     */}
      <div className="fixed w-[380px] md:w-[1400px] mx-auto h-[600px] md:h-[1000px] z-10 inset-0 flex items-center justify-center opacity-25">
        <div className="hidden md:block rotate-animation">
          <img src={MergedGlows} className="w-[1402px]" alt="Rotating Glow" />
        </div>
        <div className="block md:hidden rotate-animation">
          <img src={MergedGlowsSM} className="w-[500px]" alt="Rotating Glow" />
        </div>
      </div>
    </main>
  );
}

export default App;
