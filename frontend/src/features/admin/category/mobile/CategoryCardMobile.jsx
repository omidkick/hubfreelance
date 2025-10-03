import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { MdTitle, MdDateRange } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";

import ConfirmDelete from "../../../../ui/ConfirmDelete";
import CreateCategoryForm from "../CreateCategoryForm";
import useRemoveCategory from "../useRemoveCategory";
import { toPersianNumbers } from "../../../../utils/toPersianNumbers";
import toLocalDateShort from "../../../../utils/toLocalDateShort";
import Modal from "../../../../ui/Modal";

function CategoryCardMobile({ category, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeCategory } = useRemoveCategory();

  return (
    <div className="border border-secondary-200 rounded-xl p-4 shadow-md bg-secondary-0 space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center text-lg font-bold text-secondary-500">
        <span>{toPersianNumbers(index + 1)} #</span>
      </div>

      {/* Title */}
      <p className="font-black text-primary-700 text-xl leading-6 py-2">
        {category.label}
      </p>

      {/* Info Section */}
      <div className="space-y-4 text-sm text-secondary-600 leading-relaxed">
        {/* Description */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <FaInfoCircle className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">توضیحات:</span>
          </div>
          <span className="text-right">{category.description || "—"}</span>
        </div>

        {/* English Title */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MdTitle className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">عنوان انگلیسی:</span>
          </div>
          <span>{category.value || "—"}</span>
        </div>

        {/* Type */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <BiCategoryAlt className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">نوع:</span>
          </div>
          <span>{category.type || "—"}</span>
        </div>

        {/* Created At */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MdDateRange className="text-secondary-400 w-[14px] h-[14px]" />
            <span className="font-bold text-secondary-500">ایجاد شده:</span>
          </div>
          <span>{toLocalDateShort(category.createdAt) || "—"}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 pt-6">
        {/* Edit */}
        <>
          <button
            className="btn btn--primary w-full flex justify-center items-center gap-2 py-2 rounded-lg text-xs"
            onClick={() => setIsEditOpen(true)}
          >
            <TbPencilMinus className="w-4 h-4" />
            ویرایش
          </button>
          <Modal
            open={isEditOpen}
            title={`ویرایش ${category.label}`}
            onClose={() => setIsEditOpen(false)}
          >
            <CreateCategoryForm
              categoryToEdit={category}
              onClose={() => setIsEditOpen(false)}
            />
          </Modal>
        </>

        {/* Delete */}
        <>
          <button
            className="btn btn--danger w-full flex justify-center items-center gap-2 py-2 rounded-lg text-xs"
            onClick={() => setIsDeleteOpen(true)}
          >
            <HiOutlineTrash className="w-4 h-4" />
            حذف
          </button>
          <Modal
            open={isDeleteOpen}
            title={`حذف ${category.label}`}
            onClose={() => setIsDeleteOpen(false)}
          >
            <ConfirmDelete
              onClose={() => setIsDeleteOpen(false)}
              resourceName={category.label}
              onConfirm={() =>
                removeCategory(category._id, {
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

export default CategoryCardMobile;
