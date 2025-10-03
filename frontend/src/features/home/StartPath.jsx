import {
  HiClipboardList,
  HiOutlineUserAdd,
  HiCheckCircle,
  HiArrowRight,
} from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";
import { Link } from "react-router-dom";

function StartPath() {
  const moveBack = useMoveBack();
  return (
    <section className="px-4 py-6 md:py-8  text-secondary-700">
      <div className="max-w-5xl mx-auto text-right" dir="rtl">
        {/* Title + Back Button */}
        <div className="flex flex-col  items-start gap-y-4 md:gap-y-0 md:items-center md:flex-row md:gap-x-6 mb-8 md:mb-20 lg:mt-16">
          <button
            type="button"
            onClick={moveBack}
            aria-label="بازگشت"
            className="p-2 rounded-full shadow-lg shadow-primary-300 bg-primary-900 hover:bg-primary-800 transition duration-300"
          >
            <HiArrowRight className="w-4 h-4 md:w-7 md:h-7  text-secondary-0" />
          </button>
          <h2 className="text-xl md:text-4xl font-extrabold text-primary-900 leading-relaxed">
            شروع مسیر پروژه برای کارفرمایان
          </h2>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <HiClipboardList className="text-primary-800 w-8 h-8" />,
              title: "تعریف پروژه",
              desc: "اطلاعات پروژه شامل عنوان، توضیحات، بودجه و زمان را وارد کنید تا شروع کنیم.",
            },
            {
              icon: <HiOutlineUserAdd className="text-primary-800 w-8 h-8" />,
              title: "دریافت پیشنهاد",
              desc: "فریلنسرها پروژه شما را می‌بینند و پیشنهاد خود را با توضیحات و هزینه ارسال می‌کنند.",
            },
            {
              icon: <HiCheckCircle className="text-primary-800 w-8 h-8" />,
              title: "پذیرش و شروع همکاری",
              desc: "از بین پیشنهادات بهترین را انتخاب کرده و همکاری را آغاز کنید.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-secondary-50 shadow-lg rounded-2xl p-6 flex flex-col items-start gap-6 border border-secondary-100 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="flex items-center gap-x-2">
                {icon}
                <h3 className="font-bold text-xl text-secondary-700">
                  {title}
                </h3>
              </div>
              <p className="text-sm text-secondary-500 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-secondary-200"></div>

        {/* Proposal Flow */}
        <div className="space-y-6">
          <h3 className="text-xl lg:text-2xl font-bold text-primary-900 pb-5">
            پیشنهادات چگونه بررسی و تایید می‌شوند؟
          </h3>
          <p className="text-secondary-600 text-base leading-relaxed">
            پس از ثبت پروژه، فریلنسرهای مرتبط پیشنهادات خود را شامل قیمت، مدت
            زمان و پیام اختصاصی ارسال می‌کنند. شما می‌توانید این پیشنهادات را
            مقایسه، چت و در نهایت تایید کنید.
          </p>

          <ul className="list-disc pr-6 text-sm md:text-base leading-loose text-secondary-500 md:leading-[3rem]">
            <li>مشاهده و مقایسه تمام پیشنهادات در پنل کاربری</li>
            <li>امکان فیلتر کردن بر اساس هزینه، زمان و امتیاز فریلنسر</li>
            <li>ارسال پیام مستقیم و گفتگو قبل از تصمیم نهایی</li>
            <li>شروع همکاری تنها با یک کلیک پس از تایید پیشنهاد</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 md:my-6  text-center md:text-left">
          <Link
            to="/auth"
            className="inline-block bg-primary-900 hover:bg-primary-800 transition-colors text-white md:text-lg font-semibold py-2 px-6 rounded-lg"
          >
            ثبت اولین پروژه
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StartPath;
