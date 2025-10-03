import { NavLink } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

export function CustomNavLink({ children, to }) {
  const { closeSidebar } = useSidebar();
  const navlinkClass =
    "flex items-center gap-x-2 hover:bg-primary-100/80 hover:text-primary-900 px-2 py-1.5 rounded-lg  transition-all duration-300 md:text-lg";

  return (
    <li>
      <NavLink
        to={to}
        onClick={closeSidebar}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-primary-100/80 text-primary-900`
            : `${navlinkClass} text-secondary-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
