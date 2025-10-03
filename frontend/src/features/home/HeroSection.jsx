import { useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineTag } from "react-icons/hi";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center relative w-full overflow-hidden py-6 md:py-12 px-4 md:px-8 lg:py-14">
      <div className="flex flex-col-reverse items-center gap-8 md:gap-12 lg:gap-16 lg:flex-row lg:justify-between w-full max-w-7xl">
        {/* Text Content */}
        <div className="text-center lg:text-right w-full lg:max-w-xl flex flex-col items-center lg:items-end gap-6 md:gap-8">
          <div className="flex items-center self-start gap-2 text-sm md:text-base font-semibold px-2">
            <span className="badge badge--danger flex items-center gap-1 text-right">
              <HiOutlineTag className="w-4 h-4" />
              تخفیف بهاری
            </span>
            <span className="text-primary-800">۲۰% تخفیف</span>
          </div>

          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary-700 !leading-loose">
              پروژه‌هات رو سریع و مقرون به صرفه تحویل بگیر!
            </h1>

            <h3 className="text-secondary-400 text-sm md:text-base lg:text-lg leading-relaxed mt-4 md:mt-6 p-2">
              ما کنارتیم تا بهترین فریلنسرها رو برای پروژه‌هات پیدا کنی و با
              خیال راحت همکاری رو شروع کنی.
            </h3>
          </div>

          {/* Users + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 w-full">
            <button
              onClick={() => navigate("/start-path")}
              className="btn btn--primary w-full sm:w-auto px-8 py-3 text-sm md:text-base"
            >
              بزن بریم!
            </button>
            
            {/* Avatars */}
            <div className="flex flex-col gap-2">
              <div className="flex -space-x-2 overflow-hidden flex-row-reverse justify-center lg:justify-start">
                <img
                  className="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-1.avif"
                  alt="avatar-1"
                />
                <img
                  className="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-2.avif"
                  alt="avatar-2"
                />
                <img
                  className="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-4.avif"
                  alt="avatar-4"
                />
                <img
                  className="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-5.avif"
                  alt="avatar-5"
                />
              </div>

              <span className="text-xs md:text-sm text-secondary-500 text-center lg:text-right flex items-center justify-center lg:justify-start gap-1 font-bold">
                <span className="text-primary-900 flex items-center gap-1">
                  <FaRegUser className="w-3 h-3 md:w-4 md:h-4" />
                  + ۵۰
                </span>
                کارفرمای موفق
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <img
            src="/images/freelancer5-img.png"
            alt="freelancer pointing"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;