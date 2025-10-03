import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { mutate: createProject, isPending: isCreating } = useMutation({
    mutationFn: createProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);

      // Refetch the owner's projects in the background to keep the UI in sync
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { createProject, isCreating };
}
