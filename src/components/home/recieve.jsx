import { Receive_Section_data } from "../../constants"
import BlueFill from '../../assets/icons/BlueFill.svg'
const Receive = () => {
    return (
        <div className="py-20  bg-gradient-to-t from-[#000000] to-[#011C11]">

            <div

                style={{
                    borderRadius: '20px',
                    background: `linear-gradient(to right, #89F220, #ED7523, #FF00C4,#3CFFFF)`
                }}
                className="max-w-[1270px] z-30 relative p-[1.5px] mx-auto  rounded-[24px]">
                <div className="  pt-[30px] pb-[60px] bg-gradient-to-b from-[#0F1D1A] to-[#111015] rounded-[20px]">
                    <h2 className="text-[48px] text-center  font-bold">
                        Ce que vous recevrez
                    </h2>

                    <div className="grid px-[66px] place-items-center mt-[50px] grid-cols-2 gap-10">
                        {
                            Receive_Section_data.map((item, i) => <div className="flex max-w-[549px] items-center gap-8" key={i}>
                                <div>
                                    {item.icon}
                                </div>
                                <div className="space-y-2">
                                    <div className="flex gap-x-[11px] items-center">
                                        <h3 className="bg-clip-text text-[24px] font-extrabold text-transparent bg-gradient-to-r from-[#FFA1D7] to-[#F71B9A]">{item.title}</h3>
                                        <div>
                                            <BlueFill />
                                        </div>
                                    </div>
                                    <p className="font-[700] text-[16px]">
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