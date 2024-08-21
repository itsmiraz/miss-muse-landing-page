import { Navlinks } from "../../constants"
import PhoneIcon from '../../assets/icons/Phone.svg'
const Header = () => {
    return (
        <div className="fixed w-full md:backdrop-blur-sm md:max-w-[2000px] top-0 z-50 md:px-20 py-[29px] md:h-[110px] md:bg-gradient-to-br to-[#17171733] from-[#00000033] flex justify-center md:justify-between   md:border-b-[0.5px] border-[#969696] items-center ">

            <ul className="flex items-center justify-center gap-x-3 md:gap-x-9">
                {Navlinks.map((item, i) => <li className="text-[10px] md:text-xl  " key={i}>{item.label}</li>)}
            </ul>
            <div className="md:flex  hidden items-center gap-x-[14px]">
                <PhoneIcon />

                <p className="text-xl">514-378-1226</p>
            </div>
        </div>
    )
}

export default Header