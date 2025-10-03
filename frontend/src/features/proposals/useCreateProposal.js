import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposalApi } from "../../services/proposalService";

export default function useCreateProposal() {
  const queryClient = useQueryClient();

  const { mutate: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,

    onSuccess: (data) => {
      toast.success(data.message);

      // Refetch the owner's proposals in the background to keep the UI in sync
      queryClient.invalidateQueries({ queryKey: ["proposals"] });
    },

    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { createProposal, isCreating };
}
