
import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import toLocalDateShort from "../../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import MobileProjectCard from "./components/ProjectCardMobile";
import useOwnerProject from "./useOwnerProject";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProject();

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className=" p-2">
      {/* Desktop Table */}
      <div className="overflow-x-auto hidden md:block">
        <table>
          <thead>
            <tr className="title-row">
              <th>#</th>
              <th>عنوان پروژه</th>
              <th>دسته بندی</th>
              <th>بودجه</th>
              <th>ددلاین</th>
              <th>تگ ها</th>
              <th>فریلنسر</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody className="bg-secondary-0">
            {projects.map((project, index) => (
              <tr key={project._id}>
                <td>{toPersianNumbers(index + 1)}</td>
                <td>{truncateText(project.title, 30)}</td>
                <td>{project.category.title}</td>
                <td>{toPersianNumbersWithComma(project.budget)} تومان</td>
                <td>{toLocalDateShort(project.deadline)}</td>
                <td>
                  <div className="flex flex-wrap gap-2 max-w-[200px]">
                    {project.tags.map((tag) => (
                      <span className="badge badge--secondary" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{project.freelancer?.name || "-"}</td>
                <td>
                  {project.status === "OPEN" ? (
                    <span className="badge badge--success">باز</span>
                  ) : (
                    <span className="badge badge--danger">بسته</span>
                  )}
                </td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {projects.map((project, index) => (
          <MobileProjectCard
            key={project._id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectTable;
