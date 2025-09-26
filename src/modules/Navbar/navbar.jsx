import Logo from "../../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 p-5 bg-white flex justify-between items-center border-b border-gray-200">
      <img src={Logo} />
      <div className="uppercase flex justify-evenly gap-4 text-sm">
        <a
          href="#"
          className="relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:w-full after:origin-left after:scale-x-0 
        after:bg-black after:transition-transform after:duration-300 
        hover:after:scale-x-100"
        >
          Home
        </a>
        <a
          href="#"
          className="relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:w-full after:origin-left after:scale-x-0 
        after:bg-black after:transition-transform after:duration-300 
        hover:after:scale-x-100"
        >
          About
        </a>
        <a
          href="#"
          className="relative pb-1 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:w-full after:origin-left after:scale-x-0 
        after:bg-black after:transition-transform after:duration-300 
        hover:after:scale-x-100"
        >
          Services
        </a>
      </div>
      <button className="p-2 bg-black text-white rounded-md cursor-pointer">
        Inquire now!
      </button>
    </nav>
  );
}
