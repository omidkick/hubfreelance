import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";
import useMoveBack from "../../hooks/useMoveBack";
import { HiArrowRight } from "react-icons/hi";

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
  const moveBack = useMoveBack();

  return (
    <div>
      {/* Title + MoveBack Button */}
      <div className="flex items-center gap-x-4 mb-8 md:mb-20">
        <button
          type="button"
          onClick={moveBack}
          aria-label="بازگشت"
          className="p-2 rounded-full shadow-lg shadow-primary-300 bg-primary-900 hover:bg-primary-800 transition duration-300"
        >
          <HiArrowRight className="w-4 h-4 md:w-5 md:h-5 text-secondary-0" />
        </button>
        <h2 className="text-xl md:text-2xl font-extrabold text-secondary-500">
          وارد کردن شماره موبایل
        </h2>
      </div>
      {/* Form */}
      <form className="space-y-5" onSubmit={onSubmit}>
        <TextField
          name="phoneNumber"
          label="شماره موبایل"
          // value={phoneNumber}
          // onChange={onChange}
          register={register}
        />
        <div>
          {isSendingOtp ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;

// useQuery ==> get
// useMutation => post, put, patch, delete ,...
