import { Training_steps } from "../../constants"
import CheckIcon from '../../assets/icons/GreenCheck.svg'
import DashedLine from '../../assets/icons/DashedLine.svg'
import Step1 from '../../assets/icons/Step1.svg'
import Step2 from '../../assets/icons/Step2.svg'
import Step3 from '../../assets/icons/Step3.svg'


const Training = () => {
    return (
        <div className="bg-gradient-to-t to-[#0B1629] via-[#22091B] from-[#011C11] ">
            <h2 className="text-[49px] font-bold text-center pt-[37px]">Déroulement du training</h2>
            <div className="flex  items-center justify-center gap-x-[110px]">
                <div className="relative ">
                    <DashedLine />


                    <div className="absolute -top-10 -left-16">
                        <Step1 />
                    </div>
                    <div className="absolute top-96 -left-16">
                        <Step2 />
                    </div>
                    <div className="absolute -bottom-10 -left-16">
                        <Step3 />
                    </div>

                </div>

                <div className="my-[62px] pb-[151px] items-center space-y-[60px]">
                    {
                        Training_steps.map((item, i) => <div className="flex flex-col justify-center items-center gap-5" key={i}>
                            {/* header */}

                            <div
                                style={{
                                    borderRadius: '20px',
                                    background: `linear-gradient(to right, ${item.header.bg_gradient.color1}, ${item.header.bg_gradient.color2})`
                                }}
                                className="flex rounded-[20px] items-center gap-x-2.5 w-[302px] py-4 px-[20px] whitespace-nowrap justify-center ">
                                <div>
                                    {item.header.icon}
                                </div>
                                <p className="text-[28px] font-bold">
                                    Jour {i + 1}  :  <span className="font-normal">{item.header.head_title}</span>
                                </p>
                            </div>

                            {/* desc */}

                            <div
                                className="p-[2px] rounded-[20px] w-[557px] overflow-hidden"
                                style={{
                                    background: `linear-gradient(to right, ${item.desc.border_gradient.color1}, ${item.desc.border_gradient.color2}, ${item.desc.border_gradient.color3})`,

                                }}
                            >
                                <div
                                    style={{
                                        background: `linear-gradient(to right, ${item.desc.bg_gradient.color1}, ${item.desc.bg_gradient.color2})`,
                                        // border: `2px solid`,
                                        // borderImage: `linear-gradient(to right, ${item.desc.border_gradient.color1}, ${item.desc.border_gradient.color2}, ${item.desc.border_gradient.color3}) 1`,
                                        // borderRadius: '20px'
                                    }}
                                    className="py-[18px]  overflow-hidden rounded-[20px]  w-full px-[20px] space-y-4 ">
                                    {
                                        item.desc.steps.map((step, i) => <div className="flex gap-x-3  items-center" key={i}>

                                            <div>
                                                <CheckIcon />
                                            </div>
                                            <div className="text-[20px] font-bold" dangerouslySetInnerHTML={{ __html: step }}>

                                            </div>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Training