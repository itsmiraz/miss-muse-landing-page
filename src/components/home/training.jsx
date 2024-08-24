import { Training_steps } from "../../constants";
import CheckIcon from "../../assets/icons/GreenCheck.svg";
import DashedLine from "../../assets/icons/DashedLine.svg";
import Step1 from "../../assets/icons/Step1.svg";
import Step2 from "../../assets/icons/Step2.svg";
import Step3 from "../../assets/icons/Step3.svg";

import { motion } from "framer-motion";

const Training = () => {
  return (
    <div id="progress" className="relative ">
      <h2 className="text-[24px] md:text-[49px] z-30 relative font-bold text-center pt-[37px]">
        Déroulement du training
      </h2>
      <div className="flex px-6 mt-[62px] md:-translate-x-20 relative z-30 items-start md:items-center justify-center gap-x-[14px] md:gap-x-[110px]">
        {/* This is the Line i wanted the animation here */}
        <div className="relative w-[65px]">
          <div className="h-[600px] flex justify-center items-start md:h-[907px] overflow-hidden">
            {/* Dashed Line Animation */}
            <motion.div
              className="overflow-hidden  flex justify-center items-start h-[600px] md:h-[907px]"
              initial={{ height: 0 }} // Starting point
              whileInView={{ height: '100%' }} // Final point
              viewport={{ once: true, amount: 0.5 }} // Animate when in view
              transition={{ duration: 2 }} // Animation duration
            >
              <DashedLine />
            </motion.div>
          </div>
          <motion.div
            className="absolute md:w-[125px] md:h-[125px] w-[65px] h-[65px] -top-4 md:-top-10 -left-2 md:-left-[29px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ willChange: "transform, opacity" }} // Optimized for performance
          >
            <Step1 />
          </motion.div>

          <motion.div
            className="absolute md:w-[125px] md:h-[125px] w-[65px] h-[65px] top-72 md:top-96 -left-2 md:-left-[29px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ willChange: "transform, opacity" }} // Optimized for performance
          >
            <Step2 />
          </motion.div>

          <motion.div
            className="absolute md:w-[125px] md:h-[125px] w-[65px] h-[65px] -bottom-8 md:-bottom-10 -left-2 md:-left-[29px]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{ willChange: "transform, opacity" }} // Optimized for performance
          >
            <Step3 />
          </motion.div>
        </div>

        <div className="pb-[151px] items-center space-y-[42px] md:space-y-[60px]">
          {Training_steps.map((item, i) => (
            <motion.div
              className="flex flex-col justify-center items-center gap-[13px] md:gap-5"
              key={i}
              initial={{ scale: 0.8, x: 100, y: 100, opacity: 0 }}
              whileInView={{ scale: 1, x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              style={{ willChange: "transform, opacity" }} // Optimized for performance
            >
              {/* Header */}
              <div
                style={{
                  background: `linear-gradient(to right, ${item.header.bg_gradient.color1}, ${item.header.bg_gradient.color2})`,
                }}
                className="flex rounded-[10px] md:rounded-[20px] md:items-center gap-x-2.5 w-full md:w-[302px] py-2.5 md:py-4 px-[20px] whitespace-nowrap justify-start md:justify-center"
              >
                <div className="w-[23px] h-[23px] md:w-[41px] md:h-[41px]">
                  {item.header.icon}
                </div>
                <p className="text-[16px] md:text-[28px] font-bold">
                  Jour {i + 1} :{" "}
                  <span className="font-normal">{item.header.head_title}</span>
                </p>
              </div>

              {/* Description */}
              <div
                className="p-[2px] rounded-[11px] md:rounded-[20px] w-full md:w-[557px] overflow-hidden"
                style={{
                  background: `linear-gradient(to right, ${item.desc.border_gradient.color1}, ${item.desc.border_gradient.color2}, ${item.desc.border_gradient.color3})`,
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(to right, ${item.desc.bg_gradient.color1}, ${item.desc.bg_gradient.color2})`,
                  }}
                  className="py-[18px] overflow-hidden rounded-[11px] md:rounded-[20px] w-full px-[20px] space-y-2 md:space-y-4"
                >
                  {item.desc.steps.map((step, i) => (
                    <div className="flex gap-x-3 items-center" key={i}>
                      <div className="w-[15px] h-[14px] md:w-[27px] md:h-[25px]">
                        <CheckIcon />
                      </div>
                      <div
                        className="text-[11px] md:text-[20px] font-bold"
                        dangerouslySetInnerHTML={{ __html: step }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
