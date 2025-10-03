import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { FaAlignLeft, FaClock, FaMoneyBillWave } from "react-icons/fa";

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

function MobileProposalCard({ proposal, index }) {
  const { status, description, duration, price } = proposal;

  return (
    <div className="border border-secondary-200 rounded-xl p-4 shadow-md bg-secondary-0 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center text-sm text-secondary-500">
        <span className="font-bold text-lg text-secondary-400 dark:text-primary-700 ">{toPersianNumbers(index + 1)} #</span>
        <span className={`badge ${statusStyle[status].className} text-[10px]`}>
          {statusStyle[status].label}
        </span>
      </div>

      {/* Description */}
      <div className="flex flex-col gap-2 text-sm text-secondary-600 leading-relaxed">
        <div className="flex items-center gap-2">
          <FaAlignLeft className="text-secondary-400 dark:text-primary-600  w-[14px] h-[14px]" />
          <span className="font-bold text-secondary-500">توضیحات:</span>
        </div>
        <p className="pl-6">{truncateText(description, 80)}</p>
      </div>

      {/* Proposal Details */}
      <div className="space-y-3 text-sm text-secondary-600 leading-relaxed">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaClock className="text-secondary-400 dark:text-primary-600  w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">زمان تحویل:</span>
          </div>
          <span>{toPersianNumbers(duration)} روز</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-secondary-400 dark:text-primary-600  w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">هزینه :</span>
          </div>
          <span>{toPersianNumbersWithComma(price)}  تومان</span>
        </div>
      </div>
    </div>
  );
}

export default MobileProposalCard;
