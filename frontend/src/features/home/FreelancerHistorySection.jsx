import { HiUserGroup, HiThumbUp, HiBriefcase } from "react-icons/hi";
import { HiMiniBriefcase } from "react-icons/hi2";

const stats = [
  {
    icon: <HiUserGroup className="text-primary-700 text-3xl" />,
    value: "۳۵۰+",
    label: "تعداد فریلنسرها",
  },
  {
    icon: <HiThumbUp className="text-primary-700 text-3xl" />,
    value: "۹۲٪",
    label: "درصد رضایت",
  },
  {
    icon: <HiBriefcase className="text-primary-700 text-3xl" />,
    value: "۵۰۰+",
    label: "پروژه‌های انجام‌شده",
  },
];

function FreelancerHistorySection() {
  return (
    <section className=" py-8 px-4 rounded-2xl shadow-md mt-4 md:mt-10">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-6">
        {/* Right: Title */}
        <div className="flex items-center self-start px-2 gap-3 mt-2 md:mb-4">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-4 rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105 cursor-pointer self-start">
            <HiMiniBriefcase className="w-7 h-7 md:h-8 md:w-8 text-white " />
          </div>
          <h2 className="text-xl md:text-3xl font-black text-secondary-800">
            سابقه هاب فریلنس
          </h2>
        </div>

        {/* Left: Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-6 mt-4 md:mt-0 w-full xl:w-1/2 max-w-4xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-secondary-50  p-6 rounded-xl shadow-md w-full h- text-center"
            >
              <div className="flex items-center gap-x-3">
                <span>{stat.icon}</span>
                <span className="mt-2 text-2xl font-black text-secondary-700">
                  {stat.value}
                </span>
              </div>
              <span className="text-sm text-secondary-500 font-extrabold mt-4">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FreelancerHistorySection;
