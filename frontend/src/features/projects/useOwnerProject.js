import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../../services/projectService";

export default function useOwnerProject() {
  const { data, isLoading } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });

  const { projects } = data || {};
  return { isLoading, projects };
}
