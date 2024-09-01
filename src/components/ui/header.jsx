import { Navlinks } from "../../constants";
import PhoneIcon from "../../assets/icons/Phone.svg";
const Header = () => {
  return (
    <div className="md:fixed w-full md:backdrop-blur-sm lg:max-w-[2000px] top-0 z-50  lg:px-20 py-[29px] md:h-[110px] md:bg-gradient-to-br to-[#17171733] from-[#00000033] flex justify-center lg:justify-between   md:border-b-[0.5px] border-[#969696] items-center ">
      <ul className="flex items-center justify-center gap-x-3 md:gap-x-9">
        {Navlinks.map((item, i) => (
          <a href={item.link} key={i}>
            <li className="text-[10px] md:text-xl  ">{item.label}</li>
          </a>
        ))}
      </ul>
      <div className="lg:flex  hidden items-center gap-x-[14px]">
        <PhoneIcon />
        <a className="w-full md:w-fit" href="tel:+5143781226">
          <p className="text-xl">514-378-1226</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
