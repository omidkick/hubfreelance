import {
  FaClock,
  FaMoneyBillWave,
  FaUser,
  FaAlignLeft,
  FaExchangeAlt,
} from "react-icons/fa";
import { useState } from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import Modal from "../../../ui/Modal";
import ChangeProposalStatus from "../../project/ChangeProposalStatus";

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

function ProposalCardMobile({ proposal, index }) {
  const [open, setOpen] = useState(false);
  const { user, description, duration, price, status } = proposal;

  return (
    <div className="border border-secondary-200 rounded-xl p-4 shadow-md bg-secondary-0 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center text-sm text-secondary-500">
        <span className="font-bold">{toPersianNumbers(index + 1)} #</span>
        <span className={`badge ${statusStyle[status].className} text-[10px]`}>
          {statusStyle[status].label}
        </span>
      </div>

      {/* Freelancer */}
      <div className="flex items-center gap-2 text-sm text-secondary-700">
        <FaUser className="text-secondary-400 w-[14px] h-[14px]" />
        <span className="font-bold text-secondary-500">فریلنسر :</span>
        <span>{user.name}</span>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 text-sm text-secondary-600 leading-relaxed">
        <div className="flex items-center gap-2">
          <FaAlignLeft className="text-secondary-400 w-[14px] h-[14px]" />
          <span className="font-bold text-secondary-500">توضیحات:</span>
        </div>
        <p className="pl-6">{truncateText(description, 80)}</p>
      </div>

      {/* Proposal Details */}
      <div className="space-y-3 text-sm text-secondary-600 leading-relaxed">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaClock className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">زمان تحویل:</span>
          </div>
          <span>{toPersianNumbers(duration)} روز</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">
              هزینه پیشنهادی:
            </span>
          </div>
          <span>{toPersianNumbersWithComma(price)} تومان</span>
        </div>
      </div>

      {/* Change Status Button */}
      <div className="pt-3">
        <button
          onClick={() => setOpen(true)}
          className=" flex justify-center items-center gap-2 py-2 rounded-lg btn btn--primary w-full transition-colors text-xs font-medium"
        >
          <FaExchangeAlt className="w-4 h-4" />
          تغییر وضعیت
        </button>
        <Modal
          open={open}
          title="تغییر وضعیت در خواست"
          onClose={() => setOpen(false)}
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </div>
    </div>
  );
}

export default ProposalCardMobile;
