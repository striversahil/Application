import useZodForm from "@hooks/useZodForm";
import { formSchema } from "../Logins/schema";
import { useMutationData } from "@hooks/useMutation";
import useBackend from "@hooks/useBackend";
import { useQuery } from "@tanstack/react-query";

// Get User Sign-ed Up
export const useLogin = () => {
  const { mutate, isPending } = useMutationData(
    ["user-login"],
    (FormData: any) => {
      return useBackend({
        endpoint: "user/signin",
        method: "post",
        payload: FormData,
      });
    },
    "userinfo"
    // () => {
    //   console.log("User updated successfully!");
    // }
  );

  const { register, watch, reset, onFormSubmit, errors } = useZodForm(
    formSchema,
    mutate
    // Form Data must be present in mutate if validation Schema Done
  );

  console.log(errors);
  console.log(register);

  return { register, watch, reset, onFormSubmit, errors, isPending };
  // Return says You handle onFormSubmit and Register and I will handle the mutate and i only do after schema validation
};

// Get User Info
export const getUserInfo = (): any =>
  useQuery({
    queryKey: ["userinfo"],
    queryFn: () => {
      return useBackend({
        endpoint: "user",
        method: "get",
      });
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60 * 60,
  });
