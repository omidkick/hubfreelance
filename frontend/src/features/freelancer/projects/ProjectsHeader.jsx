// ProjectHeader.jsx

import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";
import Modal from "../../../ui/Modal";
import { HiSortAscending } from "react-icons/hi";

function ProjectHeader() {
  const { transformedCategories } = useCategories();

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);

  const sortOptions = [
    {
      label: "مرتب سازی (جدید ترین)",
      value: "latest",
    },
    {
      label: "مرتب سازی (قدیمی ترین)",
      value: "earliest",
    },
  ];

  const statusOptions = [
    { label: "همه", value: "ALL" },
    { label: "باز", value: "OPEN" },
    { label: "بسته", value: "CLOSED" },
  ];

  return (
    <div>
      <div className="flex p-2 md:p-0 gap-y-6 flex-col md:flex-row md:items-center md:justify-between text-secondary-700 mb-8">
        <h1 className="text-lg font-black ">لیست پروژه ها</h1>

        {/* Desktop filter */}
        <div className="hidden md:flex items-center justify-between font-bold gap-x-8">
          <Filter filterField="status" options={statusOptions} />
          <FilterDropDown
            filterField="sort"
            options={sortOptions}
            id="sort"
            name="sort"
          />
          <FilterDropDown
            filterField="category"
            id="category"
            name="category"
            options={[
              { value: "ALL", label: "دسته بندی (همه)" },
              ...transformedCategories,
            ]}
          />
        </div>
      </div>

      {/* Mobile filter */}
      <div className="md:hidden flex gap-4 mb-6 px-2">
        <button
          onClick={() => setOpenFilterModal(true)}
          className="flex-1 text-sm flex items-center justify-center gap-2 bg-secondary-0 text-secondary-500 rounded-xl py-2 px-1 font-bold shadow  transition"
        >
          <FiFilter className="w-5 h-5 text-secondary-300" />
          فیلتر پروژه‌ ها
        </button>

        <button
          onClick={() => setOpenCategoryModal(true)}
          className="flex-1 text-sm flex items-center justify-center gap-2 bg-secondary-0 text-secondary-500 rounded-xl py-2 font-bold shadow transition"
        >
          <HiSortAscending className="w-5 h-5 text-secondary-300" />
          مرتب سازی
        </button>
      </div>

      {/* Filter Modal */}
      <Modal
        open={openFilterModal}
        onClose={() => setOpenFilterModal(false)}
        title=" فیلتر پروژه‌ ها"
      >
        <div className=" flex flex-col gap-y-10">
          <div className="space-y-6 font-semibold">
            <Filter
              filterField="status"
              options={statusOptions}
              id="mobile-sort"
              name="mobile-sort"
            />
            <FilterDropDown
              filterField="category"
              id="mobile-category"
              name="mobile-category"
              options={[
                { value: "ALL", label: "دسته بندی (همه)" },
                ...transformedCategories,
              ]}
            />
          </div>
          <div className="flex-1">
            <button
              onClick={() => {
                setOpenFilterModal(false);
              }}
              className="w-full py-2 bg-primary-900 text-sm text-white font-bold rounded-xl shadow hover:bg-primary-600 transition"
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </Modal>

      {/* Sort Modal */}
      <Modal
        open={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
        title="مرتب سازی "
      >
        <div className="flex flex-col space-y-16">
          <div>
            <FilterDropDown filterField="sort" options={sortOptions} />
          </div>
          <div className=" flex-1 font-semibold">
            <button
              onClick={() => {
                setOpenCategoryModal(false);
              }}
              className="w-full py-2 bg-primary-900 text-sm text-white font-bold rounded-xl shadow hover:bg-primary-600 transition"
            >
              اعمال فیلتر
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProjectHeader;
