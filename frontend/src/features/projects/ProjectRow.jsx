import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { TbPencilMinus } from "react-icons/tb";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();

  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category?.title || "بدون دسته‌بندی"}</td>
      <td>{toPersianNumbersWithComma(project.budget)} تومان</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <div className="flex flex-wrap items-center gap-2 max-w-[200px] ">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td>{project.freelancer?.name || "-"}</td>
      <td>
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4 ">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900 " />
            </button>
            <Modal
              open={isEditOpen}
              title={`ویرایش ${project.title}`}
              onClose={() => {
                setIsEditOpen(false);
              }}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error " />
            </button>
            <Modal
              open={isDeleteOpen}
              title={`حذف ${project.title}`}
              onClose={() => {
                setIsDeleteOpen(false);
              }}
            >
              <ConfirmDelete
                onClose={() => {
                  setIsDeleteOpen(false);
                }}
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
      </td>

      <td>
        <Link
          to={`/owner/project/${project._id}`}
          className="flex items-center justify-center"
        >
          <HiEye className="w-5 h-5 text-primary-800" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
