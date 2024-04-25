const links = [
  { id: 1, text: "inicio", href: "inicio" },
  { id: 2, text: "Blog", href: "/#" },
];

const MenuMobile = ({ isOpen, onClick }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } bg-black/10 w-full h-screen fixed inset-0 md:hidden`}
      onClick={onClick}
    >
      <ul
        className={`
        fixed  left-0 top-0 px-2 py-5 h-screen
        w-[250px] flex flex-col gap-4  items-start text-black  shadow-md shadow-black/10 font-bold 
        `}
        style={{ backgroundColor: "#D6D6FF" }}
      >
        {links.map((link) => (
          <li key={link.id} className="p-2 bg-white w-full">
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
        <li className="p-2 bg-white w-full">
          <select name="selectLANG" id="LANG">
            <option value="EN">EN</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
export default MenuMobile;
