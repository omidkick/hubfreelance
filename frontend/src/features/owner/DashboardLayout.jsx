import Loader from "../../ui/Loader";
import useOwnerProject from "../projects/useOwnerProject";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading, projects } = useOwnerProject();
  const { proposals } = useProposals();

  if (isLoading) return <Loader />;

  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
