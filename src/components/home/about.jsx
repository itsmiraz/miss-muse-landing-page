/* eslint-disable react/no-unescaped-entities */
import Woman from '../../assets/images/woman.png'


const About = () => {
    return (
        <div className="py-20">

            <div className='flex relative z-20 flex-col justify-center items-center'>
                <img src={Woman} className='' alt='' />
                <div className='w-fit rounded-[62px] bg-gradient-to-l from-[#FFFFFF] to-[#FF0AD2] p-[4px]'>
                    <div className='px-[54px] rounded-[62px] bg-[#101010] py-[10px] w-full  '>
                        <p className='text-[40px] font-extrabold'>Salma Bensouda</p>
                    </div>
                </div>
            </div>


            <div className='w-fit -translate-y-10 grid place-items-center mx-auto bg-gradient-to-l from-[#F71B9A] to-[#FFB4DF] p-[1px] rounded-[24px]'>
                <div className='bg-[#090909]  w-full rounded-[24px] py-[87px] px-[182px] space-y-[43px]'>
                    <p className='text-[29px] text-center'>
                        Salut! Je suis <span className='text-[#F71B9A] font-bold'>Salma Bensouda</span>, fondatrice de <span className='text-[#1EA1F1] font-bold'>Miss Muse Lashes</span>. <br /> Mon aventure dans le monde des <span className='font-bold'>extensions de cils</span> a commencé <br /> il y a presque cinq ans, alors que j'étais encore <span className='font-bold'>étudiante en <br /> commerce</span>. En équilibrant mes études et ma passion pour <span className='font-bold'>la <br />beauté</span>, j'ai démarré <span className='font-bold'>mon entreprise d'extensions de cils</span> et j'ai <br /> rapidement réalisé que c'était plus qu'un simple passe-temps <br /> c'était <span className='font-bold'>ma vocation</span>.
                    </p>

                    <p className='text-[29px] text-center'>
                        Après avoir <span className='font-bold'>obtenu mon diplôme</span>, ma <span className='font-bold'>clientèle a continué de <br /> croître</span>, et j'ai décidé de me <span className='font-bold'>consacrer pleinement</span> à cette <br /> aventure passionnante. Pour offrir <span className='font-bold'>les meilleurs services</span> <br /> possibles, j'ai continué à <span className='font-bold'>améliorer mes compétences</span> en suivant <br /> <span className='font-bold'>un cours de marketing</span> et plusieurs cours avancés sur les <br /> extensions de cils, élargissant ainsi <span className='font-bold'>la gamme de services</span> que je <br /> propose. Aujourd'hui, je suis fière de détenir <span className='font-bold'>sept certifications</span> et <br /> d'avoir complété huit <span className='font-bold'>formations approfondies</span>, couvrant divers <br /> aspects de <span className='font-bold'>l'entrepreneuriat</span> et de la beauté.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About