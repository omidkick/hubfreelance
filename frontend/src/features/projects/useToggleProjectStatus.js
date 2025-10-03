import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatusApi } from "../../services/projectService";
import toast from "react-hot-toast";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();
  const { mutate: toggleProjectStatus, isPending: isUpdating } = useMutation({

    mutationFn: toggleProjectStatusApi,

    onSuccess: (data) => {
      toast.success(data.message);

      // Refetch the owner's projects in the background to keep the UI in sync
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { toggleProjectStatus, isUpdating };
}
