import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { mutate: editProject, isPending: isEditing } = useMutation({
    mutationFn: editProjectApi,

    onSuccess: (data) => {
      toast.success(data.message);

      // Refetch the owner's projects in the background to keep the UI in sync
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { editProject, isEditing };
}
