import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loader from "../../../ui/Loader";
import Table from "../../../ui/Table";
import MobileProjectCard from "../mobile/MobileProjectCard";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, projects=[] } = useProjects();
  if (isLoading) return <Loader />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className=" p-2">
      {/* Desktop Table: use "Compound Component" */}
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان پروژه</th>
          <th>بودجه</th>
          <th>ددلاین</th>
          <th>وضعیت</th>
          <th>عملیات</th>
        </Table.Header>
        <Table.Body>
          {projects.map((project, index) => (
            <ProjectRow key={project._id} project={project} index={index} />
          ))}
        </Table.Body>
      </Table>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-8">
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
