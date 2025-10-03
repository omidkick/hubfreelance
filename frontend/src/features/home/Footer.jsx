import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-secondary-0  py-8 px-4 mt-12  rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  md:leading-relaxed  ">
        {/* Column 1: About the website */}
        <div className="mr-6 md:mr-0">
          <h3 className="text-xl text-secondary-700 font-semibold mb-4">
            درباره هاب فریلنس
          </h3>
          <p className="text-sm text-secondary-600 mb-4 leading-relaxed">
            هاب فریلنس یک پلتفرم آنلاین است که به کارفرمایان امکان می‌دهد
            پروژه‌های خود را در هر زمینه‌ای، از جمله طراحی و برنامه‌نویسی، به
            فریلنسرها معرفی کنند. این سایت با هدف ایجاد یک فضای مناسب برای
            ارتباط کارفرمایان و فریلنسرها طراحی شده است.
          </p>
          <p className="text-sm text-secondary-600 mb-4 leading-relaxed">
            برخی از ویژگی‌های ما عبارتند از: ثبت آسان پروژه، دسترسی به
            فریلنسرهای متخصص، گفتگو و مذاکره قبل از همکاری، و پرداخت امن پس از
            تایید.
          </p>
          {/* Social Media Icons */}
          <div className="flex items-center justify-evenly gap-x-6 mt-8">
            <a
              href="#"
              className="text-secondary-400 hover:text-primary-900 transition-all duration-500 "
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-primary-900 transition-all duration-500 "
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-primary-900 transition-all duration-500 "
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-secondary-400 hover:text-primary-900 transition-all duration-500 "
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Column 2: Website Sections */}
        <div className="flex flex-col items-start mr-6 md:mr-0 md:items-center">
          <h3 className="text-xl text-secondary-700 font-semibold mb-4 ">
            بخش‌های سایت
          </h3>
          <ul className="list-disc pl-4 text-secondary-600 space-y-2 text-right">
            <li>
              <a href="projects" className="text-sm  hover:text-primary-800">
                پروژه‌ها
              </a>
            </li>
            <li>
              <a href="#" className="text-sm  hover:text-primary-800">
                پیشنهادات
              </a>
            </li>
            <li>
              <a href="#" className="text-sm  hover:text-primary-800">
                وبلاگ‌ها
              </a>
            </li>
            <li>
              <a href="start-path" className="text-sm  hover:text-primary-800">
                راهنما
              </a>
            </li>
            <li>
              <a href="contact-us" className="text-sm  hover:text-primary-800">
                تماس با ما
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Freelancing Sub-websites */}
        <div className="flex flex-col items-start mr-6 md:mr-0 md:items-center">
          <h3 className="text-xl text-secondary-700 font-semibold mb-4">
            سایر وب‌سایت‌ها
          </h3>
          <ul className="list-disc pl-4 text-secondary-600 space-y-2 text-right">
            <li>
              <a href="#" className="text-sm hover:text-primary-800">
                پلتفرم‌های فریلنسینگ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary-800">
                مقالات فریلنسینگ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary-800">
                آموزش‌های فریلنسینگ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-primary-800">
                کتابخانه منابع فریلنسرها
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Certification Images */}
        <div className="flex items-start gap-6 mt-10 justify-center">
          <img
            src="/images/zplogo.jpg"
            alt="زرین پال"
            className="w-28 h-auto cursor-pointer"
          />
          <img
            src="/images/ENAMAD.png"
            alt="eNamad"
            className="w-28 h-auto cursor-pointer"
          />
        </div>
      </div>
      <div className="text-center text-sm text-secondary-600 mt-8">
        <p>&copy; 2025 هاب فریلنس. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
}
