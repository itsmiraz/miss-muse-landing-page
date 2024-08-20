import logo from '../../assets/images/logo.png'
import Facebookicon from '../../assets/icons/Facebook.svg'
import InstaGram from '../../assets/icons/Instagram.svg'
import TiktokIcon from '../../assets/icons/Tiktok.svg'
import Line from '../../assets/icons/Line.svg'



const Footer = () => {
    return (
        <div className="bg-[#000000] pt-[20px] pb-[50px]">
            <div className='flex flex-col justify-center items-center mx-auto'>
                <img src={logo} alt='logo' className='max-w-[125px]' />


                <p className='text-[24px] pb-[26px]'>Montreal, Quebec</p>
                <div className='flex items-center pb-[19px] gap-x-4'>
                    <InstaGram />
                    <TiktokIcon />
                    <Facebookicon />

                </div>
                <Line />

                <p className='pt-[19px] text-[24px]'>Miss Muse 2024 Copyright</p>

            </div>


        </div>
    )
}

export default Footer