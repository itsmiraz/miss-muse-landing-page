import PinkGradient from '../../assets/gradients/expertise-pink-gradient.png'
import BlueGradient from '../../assets/gradients/expertise-blue-gradient.png'
import { Expertise_content } from '../../constants'


const Expertise = () => {
    return (
        <div className="pt-5 bg-black relative pb-[174px] ">
            <div className='z-20 relative'>

                <h2 className="text-center pb-16 text-[48px] font-bold">
                    À quoi s’attendre
                </h2>

                <div className=' flex justify-center items-center gap-x-[34px] '>
                    {Expertise_content.map((item, i) => <div className={`${i === 1 && 'mt-[40px]'} p-[1px] max-w-[400px] justify-center items-center flex h-[250px] rounded-[12px] overflow-hidden`}
                        style={{
                            backgroundImage: `linear-gradient(to right, ${item.from}, ${item.to})`,
                        }}
                        key={i}>
                        <div className={`py-[36px] px-3 z-20 flex justify-center flex-col items-center w-full h-full gap-4  rounded-[12px] bg-gray-900`}>
                            <div>
                                {item.icon}
                            </div>
                            <p className='text-[24px] font-bold text-center'>
                                {item.desc}
                            </p>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='absolute -left-[790px] top-1/2 transform -translate-y-1/2'>
                <img src={PinkGradient} className='w-[1644px]' alt="" />
            </div>
            <div className='absolute -right-[790px] top-1/2 transform -translate-y-1/2'>
                <img src={BlueGradient} className='w-[1644px]' alt="" />
            </div>
        </div>
    )
}

export default Expertise