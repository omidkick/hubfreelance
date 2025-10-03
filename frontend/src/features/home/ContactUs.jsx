import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <section
      className="px-6 py-10 md:px-10 max-w-screen-lg mx-auto text-secondary-800"
      dir="rtl"
    >
      <h1 className="text-2xl md:text-3xl font-bold text-primary-800 text-center mb-6">
        ارتباط با ما
      </h1>

      <p className="text-secondary-600 leading-7 text-justify mb-10">
        خوشحال می‌شویم نظرات، پیشنهادات و سوالات شما را دریافت کنیم. اگر نیاز به
        پشتیبانی دارید یا سوالی دارید، لطفاً از طریق فرم زیر یا اطلاعات تماس با
        ما در ارتباط باشید.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextField
            label="نام کامل"
            name="fullName"
            register={register}
            required
            validationSchema={{ required: "وارد کردن نام الزامی است." }}
            errors={errors}
          />

          <TextField
            label="ایمیل"
            name="email"
            type="email"
            register={register}
            required
            validationSchema={{
              required: "وارد کردن ایمیل الزامی است.",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "فرمت ایمیل معتبر نیست.",
              },
            }}
            errors={errors}
          />

          <TextField
            label="پیام شما"
            name="message"
            register={register}
            required
            validationSchema={{ required: "لطفاً پیام خود را وارد کنید." }}
            errors={errors}
          />

          <button
            type="submit"
            className="w-full md:w-auto bg-primary-900 hover:bg-primary-800 text-white px-6 py-3 rounded-xl transition-all text-sm"
          >
            ارسال پیام
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-secondary-50 border border-secondary-200 rounded-xl p-6  space-y-6 text-sm  md:text-base shadow-sm">
          <p>
            <span className="font-bold text-primary-700">ایمیل:</span>
            {"    "}
            info@hubfreelance.com
          </p>
          <p>
            <span className="font-bold text-primary-700">تلفن:</span>{" "}
            ۰۹۱۵۵۳۲۵۶۹۴
          </p>
          <p>
            <span className="font-bold text-primary-700">آدرس:</span> تهران،
            خیابان آزادی، پلاک ۴۲
          </p>
          <p className="text-secondary-600 md:!mt-20">
            تیم ما در اولین فرصت پاسخگوی شما خواهد بود.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
