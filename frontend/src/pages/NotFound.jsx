import { HiArrowRight } from "react-icons/hi";
import { BiErrorAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkQuery.matches);
    const handleChange = (e) => setIsDarkMode(e.matches);
    darkQuery.addEventListener("change", handleChange);
    return () => darkQuery.removeEventListener("change", handleChange);
  }, []);

  const goHome = () => navigate("/");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-secondary-100 via-secondary-0 to-secondary-100 dark:from-secondary-900 dark:via-secondary-800 dark:to-secondary-900 transition-colors duration-300">
      <div className="max-w-sm w-full text-center">
        {/* Illustration */}
        <img
          src={
            isDarkMode
              ? "https://illustrations.popsy.co/purple/resistance-band.svg"
              : "https://illustrations.popsy.co/white/resistance-band.svg"
          }
          alt="Page Not Found"
          className="w-40 sm:w-60 mx-auto mb-6 opacity-90"
        />

        {/* Heading with Icon */}
        <div className="flex items-center justify-center gap-2 text-secondary-700 dark:text-secondary-100 mb-4">
          <BiErrorAlt className="text-2xl sm:text-3xl text-primary-600 dark:text-primary-400" />
          <h1 className="text-xl sm:text-2xl font-extrabold">
            صفحه‌ای که دنبالش بودید، پیدا نشد
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          ممکن است آدرس اشتباه باشد یا این صفحه دیگر وجود نداشته باشد.
        </p>

        {/* Home Button */}
        <button
          onClick={goHome}
          className="inline-flex items-center justify-center gap-x-2 px-5 py-2.5 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 active:bg-primary-900 transition-all duration-300 text-sm sm:text-base shadow-md hover:shadow-lg"
        >
          <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          <span>بازگشت به صفحه اصلی</span>
        </button>
      </div>
    </div>
  );
}
