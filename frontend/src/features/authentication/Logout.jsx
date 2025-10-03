import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loader from "../../ui/Loader";

function Logout() {
  const { isPending, logout } = useLogout();
  return isPending ? (
    <Loader />
  ) : (
    <button onClick={logout}>
      <HiArrowRightOnRectangle className="h-6 w-6 text-secondary-800 hover:text-error transition-all duration-300 ease-in-out" />
    </button>
  );
}

export default Logout;
