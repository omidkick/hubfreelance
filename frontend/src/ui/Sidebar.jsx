import { useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { AiOutlineClose } from "react-icons/ai";
import useUser from "../features/authentication/useUser";
import UserAvatar from "../features/authentication/UserAvatar";
import { NavLink } from "react-router-dom";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

function Sidebar({ children }) {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  const { user } = useUser();

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
  }, [isSidebarOpen]);

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`fixed text-base z-40 top-0 w-[70%] bottom-0 md:w-60 bg-secondary-0 p-2 md:p-4 border-l-2 border-secondary-300 transform transition-transform duration-500
 md:static md:translate-x-0 md:row-span-2 md:row-start-1 
 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Mobile Sidebar__Header */}
        <div className="flex items-center justify-between md:hidden border-b border-secondary-300 pb-2 px-2   mb-4">
          {/* Logo Mobile sidebar */}
          <NavLink to="/" onClick={closeSidebar}>
            <img
              src="/images/LOGO-hub.png"
              alt="Freelancering Logo"
              className="w-auto h-10 cursor-pointer "
            />
          </NavLink>
          <button
            onClick={closeSidebar}
            className="text-secondary-500 hover:text-danger transition"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>

        {/* Sidebar Content */}
        <ul className="flex flex-col gap-y-4">{children}</ul>

        {/* login button or Avatar in mobile */}
        <div className="mt-[17%] px-2 md:hidden">
          {user ? (
            <div className="border-2 border-secondary-300 py-1 px-3 rounded-xl">
              <UserAvatar />
            </div>
          ) : (
            <NavLink
              to="/auth"
              className="flex items-center justify-center gap-2 w-full bg-primary-900 text-white py-2.5 rounded-xl hover:bg-primary-800 transition-colors duration-300"
              onClick={closeSidebar}
            >
              <HiArrowLeftOnRectangle className="w-5 h-5" />
              ورود
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
