import {
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineClipboardCheck,
  HiOutlineChatAlt2,
  HiOutlineCash,
} from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineDocumentText className="w-9 h-9 text-white" />,
    title: "ثبت آسان پروژه",
    description: "در چند مرحله پروژه‌تان را ثبت کنید.",
  },
  {
    icon: <HiOutlineUsers className="w-9 h-9 text-white" />,
    title: "دسترسی به فریلنسرها",
    description: "به متخصصین مختلف دسترسی دارید.",
  },
  {
    icon: <HiOutlineChatAlt2 className="w-9 h-9 text-white" />,
    title: "گفتگو و مذاکره",
    description: "پیش از همکاری، گفتگو کنید.",
  },
  {
    icon: <HiOutlineClipboardCheck className="w-9 h-9 text-white" />,
    title: "انتخاب بهترین پیشنهاد",
    description: "پیشنهادها را بررسی و مقایسه کنید.",
  },
  {
    icon: <HiOutlineCash className="w-8 h-8 text-white" />,
    title: "پرداخت امن",
    description: "پرداخت پس از تایید شما انجام می‌شود.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-8 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 text-center min-h-[180px] items-start px-4">
          {features.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className={`group flex flex-col items-center space-y-2 ${
                i === features.length - 1
                  ? "col-span-2 justify-self-center sm:col-span-1 w-52"
                  : ""
              }`}
            >
              {/* Hover Box (icon + title) */}
              <div className="flex flex-col items-center space-y-2 bg-transparent group-hover:bg-secondary-0 p-2 md:p-4 rounded-2xl transition-all duration-300 md:group-hover:scale-105 w-40 cursor-pointer">
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 p-4 rounded-3xl shadow-md">
                  {icon}
                </div>
                <h4 className="font-bold text-secondary-800 text-xs">
                  {title}
                </h4>
              </div>

              {/* Description  */}
              <p className="hidden md:block text-xs text-secondary-0 bg-secondary-600 rounded-lg font-medium leading-relaxed text-center transition-all  duration-300 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 overflow-hidden !mt-6 px-2">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
