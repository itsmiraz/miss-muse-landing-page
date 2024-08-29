import LgLogo from "../../assets/icons/MissMuseHeroLogo.svg";
import SmLogo from "../../assets/icons/MissMuseSmlogo.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="hero"
      className="pt-10 md:pt-40 pb-10 md:pb-40 md: flex justify-center items-center relative"
    >
      <div className="flex relative z-30 flex-col justify-center items-center">
        <div className="md:block hidden">
          <LgLogo />
        </div>
        <div className="md:hidden block">
          <SmLogo />
        </div>
        <h1 className="font-viga flex gap-x-2 text-[48px] md:text-[104px] leading-[64px] md:leading-[139.78px] tracking-tighter">
          <motion.span
            animate={{
              color: ["#F71B9A", "#3086F2", "#ffffff", "#F71B9A"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            Lash
          </motion.span>
          <motion.span
            animate={{
              color: ["#ffffff", "#F71B9A", "#3086F2", "#ffffff"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            1:1
          </motion.span>
          <motion.span
            animate={{
              color: ["#3086F2", "#ffffff", "#F71B9A", "#3086F2"],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            Training
          </motion.span>
        </h1>
        <h2 style={{wordSpacing:"5px"}} className="text-[20px] md:text-[44px] pb-5 md:pb-10 pt-1 md:pt-4 text-center  leading-[25px] md:leading-[55px]">
          Devenez technicienne de cils <br className="" /> certifiée{" "}
          <span style={{wordSpacing:"0px"}} className="font-bold"> en 3 jours !</span>
        </h2>
        <div className="bg-gradient-to-r to-[#8F77EA] from-[#666666] p-[1px] rounded-full">
          <a href="#startNow">
            <button className="px-[26px] md:px-10 py-2 md:py-4 text-[13px] md:text-[28px] rounded-full font-bold bg-gradient-to-r from-[#F948AE] to-[#4320EF]">
              Commencez Maintenant!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
