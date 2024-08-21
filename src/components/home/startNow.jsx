/* eslint-disable react/no-unescaped-entities */
import Instagram from '../../assets/images/instagram.png'
import IMessage from '../../assets/images/imessage.png'
import PinkEllipsis1 from '../../assets/images/glows/light-Ellipse.png'
import PinkEllipsis2 from '../../assets/images/glows/light-ellipsis-2.png'
import PinkBlob from '../../assets/images/glows/pink-blob-shape.png'
import VioletBlob from '../../assets/images/glows/violet-blob.png'


const StartNow = () => {
    return (
        <div className="py-20 relative ">

          <div className='relative z-20'>
          <h2 className="text-center font-bold text-[48px]">
                Je Veux Commencer <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF44C7] to-[#EC7DFF]">Maintenant</span> !
            </h2>
            <p className="text-[32px] pt-[56px] leading-[40px] font-bold text-center">Envoyez-moi "<span className="text-[#FF5AB9]">JE SUIS PRÊTE</span>" par texto au <span className="text-[#6F9CFF]">
                514-378-1226</span>  ou en message <br />
                privé sur <span className="text-[#FFF23C]">
                    Instagram</span> pour connaître le prix de ma formation et <br /> commencer votre aventure dès que possible.</p>
            <div className="pt-[57px] gap-x-[25px] flex justify-center items-center">
                <div className='bg-gradient-to-b from-[#FF0093] to-[#3C0023] border rounded-[9px] w-fit flex items-center gap-x-2 py-[15px] px-[23px] border-[#F71B9A]'>
                    <div>
                        <img src={Instagram} alt='instagram-logo' />
                    </div>
                    <p className='text-[24px] font-bold'>
                        Envoyez un Message
                    </p>
                </div>
                <div className='bg-gradient-to-b from-[#31A307] to-[#123D03] border rounded-[9px] w-fit flex items-center gap-x-2 py-[15px] px-[23px] border-[#00CC00]'>
                    <div>
                        <img src={IMessage} alt='imessage-logo' />
                    </div>
                    <p className='text-[24px] font-bold'>
                        Envoyez un Texto
                    </p>
                </div>
            </div>
          </div>
          <div>
            <img src={PinkEllipsis1} alt='' className='absolute -left-[350px] w-[898px] -top-60'/>
            <img src={PinkEllipsis2} alt='' className='absolute -left-[250px] w-[898px] top-40'/>
            <img src={PinkBlob} alt='' className='absolute -right-[250px] opacity-20 w-[1000px] -top-96'/>
            <img src={PinkEllipsis1} alt='' className='absolute -right-[350px] w-[898px] -top-60'/>
            <img src={PinkEllipsis2} alt='' className='absolute -right-[250px] w-[898px] top-40'/>
            <img src={PinkBlob} alt='' className='absolute -left-[200px] opacity-20 w-[1400px] -bottom-[1000px]'/>
            <img src={VioletBlob} alt='' className='absolute z-10 -left-[200px] opacity-20 w-[1400px] -top-[700px]'/>
          </div>
        </div>
    )
}

export default StartNow