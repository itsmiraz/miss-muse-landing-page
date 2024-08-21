import logo from "../../assets/images/logo.png";
import PinkGradient from "../../assets/gradients/PinkGradient.png";
import BlueGradient from "../../assets/gradients/BlueGradient.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  const pinkGradientAnimation = {
    hidden: { x: -250 },
    visible: {
      x: 250,
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0,
      },
    },
  };

  const blueGradientAnimation = {
    hidden: { x: -200, y: 100 },
    visible: {
      x: 200,
      transition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 1,
      },
    },
  };
 
  const pinkGradientAnimationMobile = {
    hidden: { x: -250 },
    visible: {
      x: 250,
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0,
      },
    },
  };

  const blueGradientAnimationMobile = {
    hidden: { x: -200, y: 100 },
    visible: {
      x: 200,
      transition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 1,
      },
    },
  };
 

  return (
    <div className="overflow-hidden pt-10 md:pt-40 pb-10 md:pb-40 md:bg-gradient-to-r from-[#1C062F] to-[#0B0113] flex justify-center items-center relative">
      <div className="flex relative z-30 flex-col justify-center items-center">
        <div>
          <img className="max-w-[165px] mx-auto" src={logo} alt="hero-logo" />
        </div>
        <h1 className="font-viga text-[48px] md:text-[104px] leading-[64px] md:leading-[139.78px] tracking-tighter ">
          <span className="word1">Lash</span>
          <span className="word2">1:1</span>
          <span className="word3">Training</span>
        </h1>
        <h2 className="text-[20px] md:text-[44px] pb-5 md:pb-10 pt-1 md:pt-4 text-center leading-[25px] md:leading-[55px]">
          Devenez technicienne de cils <br className="" />{" "}
          certifiée <span className="font-bold">en 3 jours !</span>
        </h2>
        <div className="bg-gradient-to-r to-[#8F77EA] from-[#666666] p-[1px] rounded-full">
          <button className="px-[26px] md:px-10 py-2 md:py-4 text-[13px] md:text-[28px] rounded-full font-bold bg-gradient-to-r from-[#F948AE] to-[#4320EF]">
            Commencez Maintenant!
          </button>
        </div>
      </div>
      {/* Desktop */}
      <motion.div
        className="absolute md:block hidden  z-10 -top-[169px] -left-[100px] md:-left-[213px] opacity-50  md:opacity-25"
        variants={pinkGradientAnimation}
        initial="hidden"
        animate="visible"
      >
        <img src={PinkGradient} className="max-w-[1500px] md:max-w-[1102px]" alt="" />
      </motion.div>
      <motion.div
        className="absolute md:block hidden z-10 -bottom-[169px] -right-12 md:-right-[213px] opacity-50  md:opacity-25"
        variants={blueGradientAnimation}
        initial="hidden"
        animate="visible"
      >
        <img src={BlueGradient} className="md:max-w-[1102px]" alt="" />
      </motion.div>
      {/* Mobile */}
    {/* <motion.div
        className=" block md:hidden  z-10 -top-[169px] -left-[100px] md:-left-[213px] opacity-50  md:opacity-25"
        variants={pinkGradientAnimation}
        initial="hidden"
        animate="visible"
      >
        <img src={PinkGradient} className="max-w-[1500px] md:max-w-[1102px]" alt="" />
      </motion.div>
      <motion.div
        className="absolute block md:hidden z-10 -bottom-[169px] -right-12 md:-right-[213px] opacity-50  md:opacity-25"
        variants={blueGradientAnimation}
        initial="hidden"
        animate="visible"
      >
        <img src={BlueGradient} className="md:max-w-[1102px]" alt="" />
      </motion.div> */}
      <div className="md:block hidden absolute z-20 bottom-0 left-0 h-[365px] w-full bg-gradient-to-t to-[#000000]/0 from-[#000000]"></div>
    </div>
  );
};

export default Hero;
