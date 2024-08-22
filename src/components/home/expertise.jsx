import PinkGradient from "../../assets/gradients/expertise-pink-gradient.png";
import BlueGradient from "../../assets/gradients/expertise-blue-gradient.png";
import { Expertise_content } from "../../constants";

//md:bg-[#060C16]
const Expertise = () => {
  return (
    <div className="pt-5  relative pb-[174px] ">
      <div className="z-20 relative">
        <h2 className="text-center pb-[23px] md:pb-16 text-[24px] md:text-[48px] font-bold">
          À quoi s’attendre
        </h2>

        <div className=" flex flex-wrap justify-center items-center gap-x-[9px] gap-y-[9px] md:gap-x-[34px] ">
          {Expertise_content.map((item, i) => (
            <div
              className={`${
                i === 1 ? "mt-0 md:mt-[40px]" : ""
              } glow-effect w-[182px] md:w-[400px] flex justify-center items-center h-[116px] md:h-[250px]`}
              key={i}
            >
              <div
                className={`${item.css} relative w-full h-full rounded-[12px] p-[2px] overflow-hidden`}
              >
                <div className="w-full px-[8px] md:px-6 h-full bg-gray-900 rounded-[12px] flex justify-center items-center flex-col gap-2 md:gap-4">
                  {/* <div className={`md:w-[${item.iconSize.md.w}] w-[${item.iconSize.sm.w}] md:h-[${item.iconSize.md.h}] h-[${item.iconSize.sm.h}]`}>{item.icon}</div> */}
                  {/* Mobile Icon */}
                  <div
                    className="md:hidden block"
                  
                  >
                    {item.iconSm}
                  </div>

                  {/* Medium and Larger Icon */}
                  <div
                    className="hidden md:block "
                  
                  >
                  {item.iconMd}
                  </div>

                  <p className="text-[12px] md:text-[24px] font-bold text-center">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -left-[790px] top-1/2 transform -translate-y-1/2">
        <img src={PinkGradient} className="w-[1644px]" alt="" />
      </div>
      <div className="absolute -right-[790px] top-1/2 transform -translate-y-1/2">
        <img src={BlueGradient} className="w-[1644px]" alt="" />
      </div>
    </div>
  );
};

export default Expertise;
