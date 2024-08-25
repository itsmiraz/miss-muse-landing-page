/* eslint-disable react/no-unescaped-entities */
import Instagram from '../../assets/images/instagram.png'
import IMessage from '../../assets/images/imessage.png'

const StartNow = () => {
    return (
        <div id='startNow' className="py-20 px-6 relative ">

          <div className='relative z-20'>
           <h2 className="text-center font-bold text-[24px] md:text-[48px]">
                Je Veux Commencer <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF44C7] to-[#EC7DFF]">Maintenant</span> !
            </h2>
            <p className="text-[16px] md:text-[32px] pt-[22px] md:pt-[56px] leading-[20px] md:leading-[40px] font-bold text-center">Envoyez-moi "<span className="text-[#FF5AB9]">JE SUIS PRÊTE</span>" par texto au <span className="text-[#6F9CFF]">
                514-378-1226</span>  ou en message <br className='md:block hidden' />
                privé sur <span className="text-[#FFF23C]">
                    Instagram</span> pour connaître le prix de ma formation et <br className='md:block hidden' /> commencer votre aventure dès que possible.</p>
            <div className="pt-[22px] md:pt-[57px] gap-y-[12px] gap-x-[25px] flex md:flex-row flex-col justify-center items-center">
              <a className='w-full md:w-fit' target='_blank' href='https://www.instagram.com/missmuselashes/'>
              <div className='bg-gradient-to-b from-[#FF0093] to-[#3C0023] border rounded-[9px] justify-center w-full md:w-fit flex items-center gap-x-2 py-[8px] md:py-[15px] px-[23px] border-[#F71B9A]'>
                    <div>
                        <img className='md:w-[40px] w-[20px]' src={Instagram} alt='instagram-logo' />
                    </div>
                    <p className='text-[14px] md:text-[24px] font-bold'>
                        Envoyez un Message
                    </p>
                </div>
              </a>
               <a className='w-full md:w-fit' href="sms:+15143781226" >

               <div className='bg-gradient-to-b from-[#31A307] to-[#123D03] border rounded-[9px] justify-center w-full md:w-fit flex items-center gap-x-2 py-[8px] md:py-[15px] px-[23px] border-[#00CC00]'>
                    <div>
                        <img className='md:w-[40px] w-[20px]' src={IMessage} alt='imessage-logo' />
                    </div>
                    <p className='text-[14px] md:text-[24px] font-bold'>
                        Envoyez un Texto
                    </p>
                </div>
               </a>
            </div>
          </div>
         
        </div>
    )
}

export default StartNow