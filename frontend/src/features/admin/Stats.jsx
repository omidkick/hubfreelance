import { HiUsers, HiClipboardList, HiAnnotation } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";
import SingleStat from "../../ui/SingleStat";

function Stats({ proposals, projects, users, categories }) {
  const numOfUsers = users?.length;
  const numOfProjects = projects?.length;
  const numOfProposals = proposals?.length;
  const numOfCategories = categories?.length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
      <SingleStat
        color="primary"
        icon={<HiUsers className="w-10 h-10 md:w-16 md:h-16" />}
        title=" کاربران"
        value={numOfUsers}
      />
      <SingleStat
        color="green"
        icon={<HiClipboardList className="w-10 h-10 md:w-16 md:h-16" />}
        title=" پروژه ها"
        value={numOfProjects}
      />
      <SingleStat
        color="rose"
        icon={<HiAnnotation className="w-10 h-10 md:w-16 md:h-16" />}
        title=" درخواست ها"
        value={numOfProposals}
      />
      <SingleStat
        color="amber"
        icon={<BiCategoryAlt className="w-10 h-10 md:w-16 md:h-16" />}
        title=" دسته بندی ها"
        value={numOfCategories}
      />
    </div>
  );
}

export default Stats;
