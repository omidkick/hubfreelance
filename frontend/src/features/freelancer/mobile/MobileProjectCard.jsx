import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { MdAssignmentAdd } from "react-icons/md";
import { FiDollarSign, FiClock } from "react-icons/fi";
import Modal from "../../../ui/Modal";
import { useState } from "react";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function MobileProjectCard({ project, index }) {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-secondary-200 rounded-xl p-4 shadow-md bg-secondary-0 space-y-5 md:hidden">
      {/* Header */}
      <div className="flex justify-between items-center ">
        <span className="font-bold text-secondary-400 dark:text-primary-700">
          {toPersianNumbers(index + 1)} #
        </span>
        <span
          className={`badge ${projectStatus[status].className} text-[11px] font-semibold`}
        >
          {projectStatus[status].label}
        </span>
      </div>

      {/* Title */}
      <p className="font-black text-secondary-700 leading-6 py-2">
        {truncateText(title, 50)}
      </p>

      {/* Info */}
      <div className="space-y-3 text-sm text-secondary-600 leading-relaxed">
        {/* Budget */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FiDollarSign className="text-secondary-400 dark:text-primary-600 w-[14px] h-[14px] " />
            <span className="font-bold text-secondary-500">بودجه:</span>
          </div>
          <span>{toPersianNumbersWithComma(budget)} تومان</span>
        </div>

        {/* Deadline */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <FiClock className="w-[14px] h-[14px] text-secondary-400 dark:text-primary-600" />
            <span className="font-bold text-secondary-500">ددلاین:</span>
          </div>
          <span>{toLocalDateShort(deadline)}</span>
        </div>
      </div>

      {/* Action */}
      <div className="pt-4">
        <button
          onClick={() => setOpen(true)}
          className="btn btn--primary w-full flex justify-center items-center gap-2 py-2 rounded-lg text-sm"
        >
          <MdAssignmentAdd className="w-[14px] h-[14px]" />
          افزودن پیشنهاد
        </button>
        <Modal
          open={open}
          title={
            <>
              افزودن درخواست انجام پروژه{"  "}
              <span className="text-primary-700 font-black text-base dark:text-primary-300">
                {title}
              </span>
            </>
          }
          onClose={() => setOpen(false)}
        >
          <CreateProposal
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
      </div>
    </div>
  );
}

export default MobileProjectCard;
