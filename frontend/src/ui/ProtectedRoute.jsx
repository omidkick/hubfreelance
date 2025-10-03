import { useEffect } from "react";
import useAuthorized from "../features/authentication/useAuthorized";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load The Authenticated Use
  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorized();

  // 2.check is Authorized or not --- check is Authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است.");
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

  // 3.while Loading ===> show <Loader/>
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loader />
      </div>
    );

  // 4. if user isAuthenticated and isAuthorized ===> render the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
