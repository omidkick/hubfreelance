import { FaRegUser } from "react-icons/fa";

const comments = [
  {
    id: 1,
    name: "رضا احمدی",
    avatar: "/images/comment-1.avif",
    comment: "پلتفرم خیلی خوبی هست، راحت تونستم پروژه‌ام رو ثبت کنم.",
    time: "۲ ساعت پیش",
  },
  {
    id: 2,
    name: "سمیه قاسمی",
    avatar:
      "/images/comment-2.avif",
    comment: "از کیفیت کار فریلنسرها راضی بودم، حتماً دوباره استفاده می‌کنم.",
    time: "دیروز",
  },
  {
    id: 3,
    name: "محمد جوادی",
    avatar:
      "/images/comment-3.avif",
    comment: "رابط کاربری ساده و جذاب. پیشنهاد می‌کنم حتما امتحان کنید.",
    time: "۳ روز پیش",
  },
];

export default function CommentsSection() {
  return (
    <section className="py-8 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Icon + Heading */}
        <div className="flex items-center px-2 gap-3 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-4 rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-105 cursor-pointer">
            <FaRegUser className="w-7 h-7 md:h-8 md:w-8 text-white " />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-secondary-800">
            نظرات کاربران
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {comments.map(({ id, name, avatar, comment, time }) => (
            <div
              key={id}
              className="bg-secondary-50 p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatar}
                  alt={name}
                  className="w-12 h-12 rounded-full ring-2 ring-primary-100 object-cover"
                />
                <div>
                  <p className="font-bold text-secondary-700 text-sm">{name}</p>
                  <p className="text-xs text-secondary-400">{time}</p>
                </div>
              </div>
              <p className="text-sm text-secondary-600 leading-relaxed">
                {comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
