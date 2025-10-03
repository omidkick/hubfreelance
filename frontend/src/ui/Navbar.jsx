// Navbar.js
import { HiCollection, HiHome, HiMenu, HiMail } from "react-icons/hi";
// import { CustomNavLink } from "../ui/CustomNavLink";
import { useSidebar } from "../context/SidebarContext"; // Import the Sidebar context to control the sidebar state
import useUser from "../features/authentication/useUser";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "خانه", icon: HiHome },
  { to: "/projects", label: "پروژه ها", icon: HiCollection },
  { to: "/contact-us", label: "ارتباط با ما", icon: HiMail },
];

function Navbar() {
  const { isLoading, user } = useUser();
  const { toggleSidebar } = useSidebar();
  return (
    <div
      className="sticky top-0 py-4 md:py-2 px-4 flex items-center  justify-between z-40  md:z-20
      backdrop-blur-md 2xl:container md:px-10 !bg-secondary-0/60 rounded-xl "
    >
      <div className="flex items-center gap-x-4">
        {/* toggle sidebar for mobile screens */}
        <button
          className="md:hidden text-xl"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <HiMenu className={` text-secondary-800 w-8 h-8 `} />
        </button>

        {/* logo Mobile */}
        <NavLink to="/" className="">
          <img
            src="/images/LOGO-mini-hub.png"
            alt="Freelancering Logo"
            className=" lg:hidden w-9 h-9 cursor-pointe "
          />
        </NavLink>
        {/* logo desktop */}
        <NavLink to="/">
          <img
            src="/images/LOGO-hub.png"
            alt="Freelancering Logo"
            className="hidden lg:block w-auto h-12 cursor-pointe ml-20 "
          />
        </NavLink>
      </div>
      <div
        className={`md:w-full flex items-center justify-between gap-x-6 md:gap-x-10 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
      >
        <div className="hidden md:flex gap-x-4 ">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-x-2 hover:text-primary-900 px-2 py-1.5 rounded-lg transition-all duration-300 lg:text-lg ${
                  isActive ? "text-primary-900" : "text-secondary-600"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-x-6 md:gap-x-10">
          <div className="hidden md:block">{user && <UserAvatar />}</div>
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
