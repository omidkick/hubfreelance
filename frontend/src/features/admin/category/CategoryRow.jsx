import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import { useState } from "react";

import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";
import useRemoveCategory from "./useRemoveCategory";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import CreateCategoryForm from "./CreateCategoryForm";
function CategoryRow({ category, index }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { removeCategory } = useRemoveCategory();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{category.label}</td>
      <td>{category.value}</td>
      <td>{category.type || "—"}</td>
      <td>{category.description || "—"}</td>
      <td>{toLocalDateShort(category.createdAt) || "—"}</td>
      <td>
        <div className="flex items-center gap-x-4 justify-center">
          {/* Edit Button */}
          <button onClick={() => setIsEditOpen(true)}>
            <TbPencilMinus className="w-5 h-5 text-primary-900" />
          </button>

          {/* Edit Modal */}
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

          {/* Delete Button */}
          <button onClick={() => setIsDeleteOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-error" />
          </button>

          {/* Delete Modal */}
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
        </div>
      </td>
    </Table.Row>
  );
}

export default CategoryRow;
