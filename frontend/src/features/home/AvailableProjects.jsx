import { FaClock, FaMoneyBillWave } from "react-icons/fa";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import toLocalDateShort from "../../utils/toLocalDateShort";
import truncateText from "../../utils/truncateText";
import { Link } from "react-router-dom";
import useMoveBack from "../../hooks/useMoveBack";
import { HiArrowRight } from "react-icons/hi";

function AvailableProjects() {
  const moveBack = useMoveBack();

  const sampleProjects = [
    {
      _id: "1",
      title: "طراحی سایت فروشگاهی",
      category: { title: "طراحی وب‌سایت" },
      budget: 5000000,
      deadline: "2025-06-15",
    },
    {
      _id: "2",
      title: "توسعه اپلیکیشن موبایل",
      category: { title: "توسعه نرم‌افزار" },
      budget: 3000000,
      deadline: "2025-05-20",
    },
    {
      _id: "3",
      title: "نوشتن مقاله SEO",
      category: { title: "محتوا و نوشتار" },
      budget: 1000000,
      deadline: "2025-05-30",
    },
    {
      _id: "4",
      title: "مشاوره مالی و کسب‌وکار",
      category: { title: "مشاوره" },
      budget: 2000000,
      deadline: "2025-06-10",
    },
  ];

  return (
    <section
      className="px-4 py-12 md:px-10 max-w-screen-lg mx-auto text-secondary-800"
      dir="rtl"
    >
      {/* Section Title */}
      <header className="text-center mb-12">
        {/* Title + MoveBack Button */}
        <div className="flex items-center gap-x-4 mb-8 md:mb-20 mt-10">
          <button
            type="button"
            onClick={moveBack}
            aria-label="بازگشت"
            className="p-2 rounded-full shadow-lg shadow-primary-300 bg-primary-900 hover:bg-primary-800 transition duration-300"
          >
            <HiArrowRight className="w-4 h-4 md:w-5 md:h-5 text-secondary-0" />
          </button>
          <h2 className="text-xl md:text-2xl font-extrabold text-secondary-700">
            پروژه های فعال</h2>
        </div>
        <h3 className="text-lg font-bold text-secondary-400 mt-2">
          این‌ها تنها نمونه‌هایی از پروژه‌های موفق ما هستند.
        </h3>
      </header>

      <div className="space-y-6">
        {/* Sample Projects List */}
        {sampleProjects.map((project) => (
          <div
            key={project._id}
            className="bg-secondary-0 border border-secondary-200 rounded-xl p-6 shadow-md sm:p-8"
          >
            {/* Category */}
            <div className="flex justify-between items-center text-xs text-secondary-500 mb-2">
              <span className="badge badge--primary text-xs">
                {project.category?.title || "بدون دسته‌بندی"}
              </span>
            </div>

            {/* Title */}
            <p className="font-semibold text-secondary-700 leading-6 py-2 text-lg sm:text-xl">
              {truncateText(project.title, 50)}
            </p>

            {/* Budget & Deadline */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm text-secondary-600 mt-2 gap-y-3 md:gap-y-0">
              <div className="flex items-center gap-2">
                <FaMoneyBillWave className="text-secondary-400 w-4 h-4" />
                <span className="text-secondary-500">بودجه:</span>
                <span className="font-medium">
                  {toPersianNumbersWithComma(project.budget)} تومان
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-secondary-400 w-4 h-4" />
                <span className="text-secondary-500">ددلاین:</span>
                <span className="font-medium">
                  {toLocalDateShort(project.deadline)}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center pt-6">
          <p className="text-sm text-secondary-600">
            <span className="text-lg font-semibold text-primary-800">
              +{toPersianNumbersWithComma(sampleProjects.length)}
            </span>{" "}
            پروژه فعال در سایت وجود دارد که فریلنسرها می‌توانند روی آن‌ها کار
            کنند.
          </p>
        </div>
      </div>

      {/* Call to register */}
      <div className="mt-8 bg-secondary-0 border border-primary-100 rounded-xl p-6 text-center shadow-lg">
        <h2 className="text-lg font-semibold text-primary-800 mb-4">
          می‌خوای پروژه‌های بیشتری ببینی؟
        </h2>
        <p className="text-sm text-secondary-700 mb-4">
          برای دسترسی به همه پروژه‌ها و ارسال پیشنهاد، در سایت ثبت‌نام کن و
          پروفایلت رو کامل کن.
        </p>
        <Link
          to="/auth"
          className="inline-block bg-primary-800 hover:bg-primary-900 transition-colors text-white text-sm font-semibold py-2 px-6 rounded-lg"
        >
          ثبت‌نام و تکمیل پروفایل
        </Link>
      </div>
    </section>
  );
}

export default AvailableProjects;
