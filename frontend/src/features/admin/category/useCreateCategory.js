import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCategoryApi } from "../../../services/categoryService";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  const { mutate: createCategory, isPending: isCreating } = useMutation({
    mutationFn: createCategoryApi,

    onSuccess: (data) => {
      toast.success(data.message);

      // Refetch the ADMIN's category in the background to keep the UI in sync
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { createCategory, isCreating };
}
