import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCategoryApi } from "../../../services/categoryService";

export default function useEditCategory() {
  const queryClient = useQueryClient();

  const { mutate: editCategory, isPending: isEditing } = useMutation({
    mutationFn: editCategoryApi,

    onSuccess: (data) => {
      toast.success(data.message);

      // Refetch the Admin's Category in the background to keep the UI in sync
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { editCategory, isEditing };
}
