import useNav from "../../hooks/useNav";
import MenuMobile from "./MenuMobile";
import texts from "../../utils/texts.json";
import { PiCircleDashedBold } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsJustify, BsXLg } from "react-icons/bs";
import useMediaQuery from "../../hooks/useMediaQuery";

const Navbar = () => {
  const { isOpen, handleIsOpen, hasScrolled } = useNav();
  const isSmallScreen = useMediaQuery("(max-width: 640px)"); // Suponiendo 640px como el breakpoint para móviles

  return (
    <header
      className={`
        fixed z-[98] top-0 left-0 w-full 
        px-10 flex justify-start gap-7 items-center  
        h-[78px]  text-white 
      `}
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div
        className="font-bold flex items-center gap-4"
        style={{ color: "#272727" }}
      >
        <PiCircleDashedBold size={35} color="#3030FF" />
        {texts["section-one"].title}
      </div>

      {/* Renderizar elementos del menú solo si la vista no es móvil */}
      {!isSmallScreen && (
        <>
          <div>
            <a
              href={texts["section-one"].bloglink}
              target="_blank"
              rel="noopener noreferrer"
              className=""
              style={{ color: "#272727" }}
            >
              Blog
            </a>
          </div>
          <div className="" style={{ color: "#272727" }}>
            <select
              style={{ backgroundColor: "#FAFAFA" }}
              name="select1"
              id="select1"
            >
              <option value="EN">EN</option>
            </select>
          </div>
        </>
      )}

      {/* Renderizar botón de menú solo si la vista no es móvil */}
      {!isSmallScreen && (
        <div className="ml-auto">
          <button>
            <HiOutlineMenuAlt4 size={35} color="#3030FF" />
          </button>
        </div>
      )}

      {/* Renderizar botón de menú móvil */}
      <button
        className="text-2xl cursor-pointer z-[99] text-secondary flex items-center justify-center md:hidden ml-auto"
        onClick={handleIsOpen}
      >
        {isOpen ? <BsXLg color="black" /> : <HiOutlineMenuAlt4 color="black" />}
      </button>
      <MenuMobile isOpen={isOpen} onClick={handleIsOpen} />
    </header>
  );
};
export default Navbar;
