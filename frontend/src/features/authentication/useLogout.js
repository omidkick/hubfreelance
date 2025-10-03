import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,

    onSuccess: () => {
      queryClient.removeQueries(); //remove all cashes (tokens)
      navigate("/auth", { replace: true });
    },
  });

  return { logout, isPending };
}
