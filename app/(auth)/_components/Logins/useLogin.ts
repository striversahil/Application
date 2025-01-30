import useZodForm from "@hooks/useZodForm";
import { formSchema } from "./schema";
import { useMutationData } from "@hooks/useMutation";
import useBackend from "@hooks/useBackend";

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
  console.log(mutate);

  return { register, watch, reset, onFormSubmit, errors, isPending };
  // Return says You handle onFormSubmit and Register and I will handle the mutate and i only do after schema validation
};
