import { useScroll, useSpring, useTransform } from "framer-motion";
import About from "./components/home/about";
import Expertise from "./components/home/expertise";
import Hero from "./components/home/hero";
import Receive from "./components/home/recieve";
import StartNow from "./components/home/startNow";
import Training from "./components/home/training";
import Footer from "./components/ui/footer";
import {motion } from 'framer-motion'
import Header from "./components/ui/header";
import PinkBlob from './assets/gradients/PinkGradient.png'
import BlueGlowImg from './assets/gradients/BlueGradient.png'
function App() {
  const { scrollYProgress } = useScroll();
  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 1,
  };
  const rotateEllipsis1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rotateEllipsis2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const springRotateEllipsis1 = useSpring(rotateEllipsis1, springConfig);
  const springRotateEllipsis2 = useSpring(rotateEllipsis2, springConfig);
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
   <motion.div
        className="fixed w-[1000px]  z-10 -top-[50px] md:-top-[169px] -left-[500px] md:-left-[213px] opacity-25"
        style={{ rotate: springRotateEllipsis1 }}
        initial="hidden"
        animate="visible"
      >
        <img src={PinkBlob} className="w-[1000px] md:w-[1102px]" alt="" />
      </motion.div>
      <motion.div
        className="fixed  w-[1000px]  z-10 -top-[0px] -right-[500px] md:-right-[213px] opacity-25"
        style={{ rotate: springRotateEllipsis2 }}
        initial="hidden"
        animate="visible"
      >
        <img src={BlueGlowImg} className="w-[1500px]  md:w-[1102px]" alt="" />
      </motion.div>
    </main>
  )
}

export default App
