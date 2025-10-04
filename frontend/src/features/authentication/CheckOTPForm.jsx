import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loader from "../../ui/Loader";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "👏" });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
      if (user.role === "ADMIN") return navigate("/admin");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer); // Cleanup on unmount or re-render
    };
  }, [time]);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        aria-label="بازگشت"
        className="p-2 rounded-full shadow-lg shadow-primary-300 bg-primary-900 hover:bg-primary-800 transition duration-300 mb-4"
      >
        <HiArrowRight className="w-6 h-6  text-secondary-0" />
      </button>

      {otpResponse && (
        <p className="flex items-center my-4 gap-x-2">
          <span className="text-xs md:text-sm xl:text-base">
            {otpResponse?.message}
          </span>
          <button onClick={onBack}>
            <CiEdit className="w-4 h-4  md:w-6 md:h-6 text-primary-900" />
          </button>
        </p>
      )}

      <div className="mb-4 md:mb-10 text-secondary-400 text-xs md:text-sm">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد </p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-8" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800 text-sm md:text-base">
          کد تایید را وارد کنید
        </p>
        {/* OTP Input */}
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props, index) => (
            <input
              type="tel"
              inputMode="numeric"
              name={`otp-${index}`}
              id={`otp-${index}`}
              pattern="\d*"
              maxLength={1}
              {...props}
              style={{
                width: "14vw",
                maxWidth: "2.5rem",
                minWidth: "2rem",
                padding: "0.5rem 0.2rem",
                border: "2px solid rgb(var(--color-primary-300))",
                borderRadius: "0.5rem",
                textAlign: "center",
                background: "rgb(var(--color-secondary-100))",
                color: "rgb(var(--color-secondary-700))",
                fontWeight: "800",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
              className="otp-input"
            />
          )}
          containerStyle="flex flex-row-reverse gap-x-1 md:gap-x-2 justify-center w-full"
        />

        <div>
          {isPending ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;