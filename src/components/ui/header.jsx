import { Navlinks } from "../../constants"
import PhoneIcon from '../../assets/icons/Phone.svg'
const Header = () => {
    return (
        <div className="fixed w-full backdrop-blur-sm max-w-[2000px] top-0 z-50 px-20 h-[110px] bg-gradient-to-br to-[#17171733] from-[#00000033] flex justify-between border-b-[0.5px] border-[#969696] items-center ">

            <ul className="flex items-center gap-x-9">
                {Navlinks.map((item, i) => <li className="text-xl " key={i}>{item.label}</li>)}
            </ul>
            <div className="flex items-center gap-x-[14px]">
                <PhoneIcon />

                <p className="text-xl">514-378-1226</p>
            </div>
        </div>
    )
}

export default Header