import useCategories from "../../hooks/useCategories";
import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loader from "../../ui/Loader";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
  const { proposals, isLoading: isLoading1 } = useProposals();
  const { projects, isLoading: isLoading2 } = useProjects();
  const { users, isLoading: isLoading3 } = useUsers();
  const { categories, isLoading: isLoading4 } = useCategories();
  if (isLoading1 || isLoading2 || isLoading3 || isLoading4) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals}
        projects={projects}
        users={users}
        categories={categories}
      />
    </div>
  );
}

export default DashboardLayout;
