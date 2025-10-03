import { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaUserShield } from "react-icons/fa";
import { toPersianNumbers } from "../../../../utils/toPersianNumbers";
import Modal from "../../../../ui/Modal";
import ChangeUserStatus from "../ChangeUserStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UserCardMobile({ user, index }) {
  const [open, setOpen] = useState(false);
  const { name, email, phoneNumber, role, status } = user;

  const renderRole = {
    ADMIN: "ادمین",
    OWNER: "کارفرما",
    FREELANCER: "فریلنسر",
  };

  return (
    <div className="border border-secondary-200 rounded-xl p-4 shadow-md bg-secondary-0 space-y-5 text-sm text-secondary-600">
      {/* Header */}
      <div className="flex justify-between items-center text-sm text-secondary-500">
        <span className="font-bold text-lg text-secondary-400 dark:text-primary-700">
          {toPersianNumbers(index + 1)} #
        </span>
        <span className={`badge ${statusStyle[status].className} text-[10px]`}>
          {statusStyle[status].label}
        </span>
      </div>

      {/* Info Blocks */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <FaUser className="text-secondary-400 dark:text-primary-600 w-[14px] h-[14px]" />
          <span className="font-bold text-secondary-500">نام:</span>
          <span className="ml-auto">{name}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-secondary-400 dark:text-primary-600 w-[14px] h-[14px]" />
          <span className="font-bold text-secondary-500">ایمیل:</span>
          <span className="ml-auto break-all">{email}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-secondary-400 dark:text-primary-600 w-[14px] h-[14px]" />
          <span className="font-bold text-secondary-500">شماره موبایل:</span>
          <span className="ml-auto">{toPersianNumbers(phoneNumber)}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaUserShield className="text-secondary-400 dark:text-primary-600 w-[14px] h-[14px]" />
          <span className="font-bold text-secondary-500">نقش:</span>
          <span className="ml-auto">{renderRole[role]}</span>
        </div>
      </div>

      {/* Changing Status */}
      <div className="pt-8">
        <button
          onClick={() => setOpen(true)}
          className="w-full text-white bg-primary-900 hover:bg-primary-800 transition-colors duration-200 rounded-lg py-2 text-sm font-bold"
        >
          تغییر وضعیت
        </button>

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="تغییر وضعیت کاربر"
        >
           <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />

        </Modal>
      </div>
    </div>
  );
}

export default UserCardMobile;
