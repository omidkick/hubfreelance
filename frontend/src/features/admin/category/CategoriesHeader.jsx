import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";
// import CreateCategoryForm from "./CreateCategoryForm";
import Modal from "../../../ui/Modal";
import CreateCategoryForm from "./CreateCategoryForm";

function CategoriesHeader() {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
      <h1 className="text-secondary-700 font-extrabold text-base sm:text-lg md:text-xl tracking-tight">
        لیست دسته‌بندی‌ ها
      </h1>

      <Modal
        title="اضافه کردن دسته‌بندی جدید"
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateCategoryForm onClose={() => setOpen(false)} />
      </Modal>

      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiOutlinePlus />
        <span>اضافه کردن دسته‌بندی</span>
      </button>
    </div>
  );
}

export default CategoriesHeader;
