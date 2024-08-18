import logo from '../../assets/images/logo.png'
import PinkGradient from '../../assets/gradients/PinkGradient.png'
import BlueGradient from '../../assets/gradients/BlueGradient.png'



const Hero = () => {
    return (
        <div className="overflow-hidden bg-gradient-to-r pt-40 pb-40 from-[#1C062F] to-[#0B0113] flex justify-center items-center relative">
            <div className='flex relative z-30 flex-col justify-center items-center'>
                <div>
                    <img className='max-w-[165px] mx-auto' src={logo} alt='hero-logo' />
                </div>
                <h1 className='font-viga text-[104px] leading-[139.78px] tracking-tighter '>
                    Lash 1:1 Training
                </h1>
                <h2 className='text-[44px] pb-10 pt-4 text-center leading-[55px]'>
                    Devenez technicienne de cils <br className='md:block hidden' /> certifiée <span className='font-bold'>en 3 jours !</span>
                </h2>
                <div className='bg-gradient-to-r to-[#8F77EA] from-[#666666] p-[1px] rounded-full'>
                    <button className='px-10 py-4 text-[28px] rounded-full font-bold bg-gradient-to-r from-[#F948AE] to-[#4320EF]'>
                        Commencez Maintenant!
                    </button>
                </div>

            </div>
            <div className='absolute z-10 -top-[169px] -left-[213px] opacity-25'>
                <img src={PinkGradient} className='max-w-[1102px]' alt="" />
            </div>
            <div className='absolute z-10 -bottom-[169px] -right-[213px] opacity-25'>
                <img src={BlueGradient} className='max-w-[1102px]' alt="" />
            </div>
            <div className=' absolute z-20 bottom-0 left-0 h-[365px] w-full bg-gradient-to-t to-[#000000]/0 from-[#000000]'>

            </div>

        </div>
    )
}

export default Hero