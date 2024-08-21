import logo from '../../assets/images/logo.png'
import Facebookicon from '../../assets/icons/Facebook.svg'
import InstaGram from '../../assets/icons/Instagram.svg'
import TiktokIcon from '../../assets/icons/Tiktok.svg'
import Line from '../../assets/icons/Line.svg'



const Footer = () => {
    return (
        <div className="bg-[#000000] pt-[20px] pb-[37px] md:pb-[50px]">
            <div className='flex flex-col justify-center items-center mx-auto'>
                <img src={logo} alt='logo' className='max-w-[93px] md:max-w-[125px]' />


                <p className='text-[18px] md:text-[24px] pb-[26px]'>Montreal, Quebec</p>
                <div className='flex items-center pb-[19px] gap-x-4'>
                   <div className='md:size-[30px] size-[22px]'>
                   <InstaGram />
                   </div>
                    <div className='md:size-[30px] size-[22px]'>
                    <TiktokIcon />
                    </div>
                    <div className='md:size-[30px] size-[22px]'>
                    <Facebookicon />
                    </div>

                </div>
                <Line />

                <p className='pt-[19px] text-[18px] md:text-[24px]'>Miss Muse 2024 Copyright</p>

            </div>


        </div>
    )
}

export default Footer