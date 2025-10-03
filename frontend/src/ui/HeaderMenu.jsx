//! previous version
// import { HiOutlineUser } from "react-icons/hi";
// import { Link } from "react-router-dom";
// import DarkModeToggle from "./DarkModeToggle";
// import Logout from "../features/authentication/Logout";

// function HeaderMenu() {
//   return (
//     <ul className="flex gap-x-4 items-center">
//       <li className="flex">
//         <Link to="dashboard">
//           <HiOutlineUser className="w-5 h-5 text-primary-900" />
//         </Link>
//       </li>
//       <li className="flex">
//         <DarkModeToggle />
//       </li>
//       <li className="flex">
//         <Logout />
//       </li>
//     </ul>
//   );
// }

// export default HeaderMenu;

import { HiOutlineUser } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";
import useUser from "../features/authentication/useUser";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

function HeaderMenu() {
  const { user } = useUser();

  // Determine the dashboard path based on user role
  const getDashboardPath = () => {
    if (!user) return "/auth";
    switch (user.role) {
      case "ADMIN":
        return "/admin/dashboard";
      case "FREELANCER":
        return "/freelancer/dashboard";
      case "OWNER":
        return "/owner/dashboard";
      default:
        return "/";
    }
  };

  return (
    <ul className="flex gap-x-4 items-center">
      <li className="flex">
        <Link to={getDashboardPath()}>
          <HiOutlineUser className="w-6 h-6 text-primary-900" />
        </Link>
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>

      {user ? (
        <li className="flex">
          <Logout />
        </li>
      ) : (
        <li>
          <NavLink
            to="/auth"
            className="flex items-center justify-center gap-2 w-full 
             bg-primary-900 text-white 
             py-2 px-4 rounded-xl 
             hover:bg-primary-800 transition-colors duration-300
             text-sm md:text-base md:py-1.5 md:px-3"
             title="ورود به پنل کاربری"
          >
            <HiArrowLeftOnRectangle className="w-5 h-5" />
            ورود
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default HeaderMenu;
