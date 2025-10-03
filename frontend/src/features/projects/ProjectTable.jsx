import Empty from "../../ui/Empty";
import Loader from "../../ui/Loader";
import Table from "../../ui/Table";
import MobileProjectCard from "./components/ProjectCardMobile";
import ProjectRow from "./ProjectRow";
import useOwnerProject from "./useOwnerProject";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProject();
  // console.log(projects);

  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className=" p-2">
      {/* Desktop Table: use "Compound Component" */}
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>دسته بندی</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>تگ ها</th>
          <th>فریلنسر</th>
          <th>وضعیت</th>
          <th>عملیات</th>
          <th>درخواست ها</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>

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
