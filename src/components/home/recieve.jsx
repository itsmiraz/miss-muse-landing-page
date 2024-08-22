import { Receive_Section_data } from "../../constants"
import BlueFill from '../../assets/icons/BlueFill.svg'
const Receive = () => {
    //md:bg-gradient-to-t from-[#000000] to-[#011C11]
    return (
        <div className="py-10 md:py-20 px-5  ">

            <div

                // style={{
                //     borderRadius: '20px',
                //     background: `linear-gradient(to right, #89F220, #ED7523, #FF00C4,#3CFFFF)`
                // }}
                className="max-w-[1270px] rainbow-border z-30 relative p-[1px] mx-auto  rounded-[24px]">
                <div className="w-full h-full  pt-[30px] pb-[60px] bg-gradient-to-b from-[#0F1D1A] to-[#111015] rounded-[20px]">
                    <h2 className="text-[24px] md:text-[48px] text-center  font-bold">
                        Ce que vous recevrez
                    </h2>

                    <div className="grid px-[24px] md:px-[66px] place-items-center mt-[50px] grid-cols-1 md:grid-cols-2 gap-10">
                        {
                            Receive_Section_data.map((item, i) => <div className="flex md:flex-row flex-col max-w-[549px] justify-center md:justify-start items-center md:items-center gap-2 md:gap-8" key={i}>
                                <div className="md:block hidden">
                                    {item.lgIcon}
                                </div>
                                <div className="block md:hidden">
                                    {item.smIcon}
                                </div>
                                <div className="space-y-[6px] md:space-y-2">
                                    <div className="flex md:justify-start justify-center gap-x-[6px] md:gap-x-[11px] items-center">
                                        <h3 className="bg-clip-text text-[18px] md:text-[24px] font-extrabold text-transparent bg-gradient-to-r from-[#FFA1D7] to-[#F71B9A]">{item.title}</h3>
                                        <div className="w-[21px] h-[21px] md:w-[30px] md:h-[30px]">
                                            <BlueFill />
                                        </div>
                                    </div>
                                    <p className="font-[700] md:text-start text-center text-[12px] md:text-[16px]">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>)
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Receive