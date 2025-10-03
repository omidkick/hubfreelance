import { HiMenu } from "react-icons/hi";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import { useSidebar } from "../context/SidebarContext";
import { NavLink } from "react-router-dom";

function Header() {
  const { isLoading } = useUser();
  const { toggleSidebar } = useSidebar();
  return (
    <div
      className="bg-secondary-0 py-4 md:py-2 px-4 flex items-center border-b border-secondary-200 justify-between z-40  md:z-20
      md:static "
    >
      {/* Right side */}
      <div className="flex items-center gap-x-4">
        {/* toggle sidebar for mobile screens */}
        <button
          className="md:hidden text-xl"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <HiMenu className={` text-secondary-800 w-8 h-8`} />
        </button>

        {/* logo Mobile */}
        <NavLink to="/" className="">
          <img
            src="/images/LOGO-mini-hub.png"
            alt="Freelancering Logo"
            className=" md:hidden w-9 h-9 cursor-pointe "
          />
        </NavLink>
        {/* logo desktop */}
        <NavLink to="/">
          <img
            src="/images/LOGO-hub.png"
            alt="Freelancering Logo"
            className="hidden md:block w-auto h-12 cursor-pointe"
          />
        </NavLink>
      </div>
      {/* Left side */}
      <div
        className={`md:container xl:max-w-screen-lg flex items-center justify-end gap-x-6 md:gap-x-10 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <div className="hidden md:block">{<UserAvatar />}</div>
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
