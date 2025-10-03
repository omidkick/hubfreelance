import {
  FaMoneyBillWave,
  FaClock,
  FaUser,
  FaTags,
  FaExchangeAlt,
} from "react-icons/fa";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { TbPencilMinus } from "react-icons/tb";
import { HiEye, HiOutlineDocumentText, HiOutlineTrash } from "react-icons/hi";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import { useState } from "react";
import useRemoveProject from "../useRemoveProject";
import CreateProjectForm from "../CreateProjectForm";
import ToggleProjectStatus from "../ToggleProjectStatus";
import { Link } from "react-router-dom";

function MobileProjectCard({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <div className="border border-secondary-200 rounded-xl p-4 shadow-md bg-secondary-0 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center text-sm text-secondary-500">
        <span className="font-bold">{toPersianNumbers(index + 1)} #</span>
        <span className="badge badge--primary text-[10px]">
          {project.category?.title || "بدون دسته‌بندی"
          }
        </span>
      </div>

      {/* Title */}
      <p className=" font-black text-secondary-700 leading-6 py-2">
        {truncateText(project.title, 50)}
      </p>

      {/* Project Info */}
      <div className="space-y-3 text-sm text-secondary-600 leading-relaxed">
        {/* Budget */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">بودجه:</span>
          </div>
          <span>{toPersianNumbersWithComma(project.budget)} تومان</span>
        </div>

        {/* Deadline */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaClock className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">ددلاین:</span>
          </div>
          <span>{toLocalDateShort(project.deadline)}</span>
        </div>

        {/* Freelancer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaUser className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">فریلنسر:</span>
          </div>
          <span>{project.freelancer?.name || "-"}</span>
        </div>

        {/* Tags */}
        <div className="flex items-start gap-2">
          <FaTags className="text-secondary-400 mt-1 w-[14px] h-[14px]" />
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="badge badge--secondary text-[10px]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Status Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaExchangeAlt className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">وضعیت:</span>
          </div>
          <ToggleProjectStatus project={project} />
        </div>

        {/* Proposals Link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineDocumentText className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">درخواست‌ها:</span>
          </div>
          <Link
            to={`/owner/project/${project._id}`}
            className="flex items-center justify-center"
          >
            <HiEye className="w-5 h-5 text-primary-800" />
          </Link>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 pt-6">
        {/* Edit */}
        <>
          <button
            className="btn btn--primary w-full flex justify-center items-center gap-2 py-2 rounded-lg text-xs "
            onClick={() => setIsEditOpen(true)}
          >
            <TbPencilMinus className="w-4 h-4" />
            ویرایش
          </button>
          <Modal
            open={isEditOpen}
            title={`ویرایش ${project.title}`}
            onClose={() => setIsEditOpen(false)}
          >
            <CreateProjectForm
              projectToEdit={project}
              onClose={() => setIsEditOpen(false)}
            />
          </Modal>
        </>

        {/* Delete */}
        <>
          <button
            className=" btn btn--danger w-full flex justify-center items-center gap-2 py-2 rounded-lg  text-xs"
            onClick={() => setIsDeleteOpen(true)}
          >
            <HiOutlineTrash className="w-4 h-4" />
            حذف
          </button>
          <Modal
            open={isDeleteOpen}
            title={`حذف ${project.title}`}
            onClose={() => setIsDeleteOpen(false)}
          >
            <ConfirmDelete
              onClose={() => setIsDeleteOpen(false)}
              resourceName={project.title}
              onConfirm={() =>
                removeProject(project._id, {
                  onSuccess: () => setIsDeleteOpen(false),
                  onError: () => setIsDeleteOpen(false),
                })
              }
              disabled={false}
            />
          </Modal>
        </>
      </div>
    </div>
  );
}

export default MobileProjectCard;
