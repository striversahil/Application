import {
  MutationFunction,
  MutationKey,
  useMutation,
  useMutationState,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useMutationData = (
  mutationKey: MutationKey,
  mutationFn: MutationFunction<any, any>,
  queryKey?: string,
  onSuccess?: () => void
) => {
  // Creating a query client for Mutation
  const client = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey,
    mutationFn,
    onSuccess(data) {
      if (onSuccess) onSuccess(); // Calling onSuccess if provided

      return toast(
        data?.status === 200 || data?.status === 201 ? "Success" : "Error",
        {
          description: data?.data,
        }
      );
    },
    onSettled: async () => {
      return await client.invalidateQueries({
        queryKey: [queryKey],
        exact: true,
      });
    },
  });

  return { mutate, isPending };
};

// Example usage
// const { mutate, isPending } = useMutationData(
//   ["updateUser"], // mutationKey
//   updateUserApi, // mutationFn
//   "userData", // queryKey to invalidate  i.e. forcing the a refetch to useData hook
//   () => console.log("User updated successfully!") // onSuccess callback
// );

// // Trigger the mutation
// mutate({ id: 1, name: "John Doe" });

/**
 * useMutationDataState
 *
 * This hook will return the latest variables and status of the given mutation key.
 *
 * @param {string} mutationKey - The key of the mutation to monitor
 * @returns {Object} - An object containing the latest variables and status of the mutation
 */
export const useMutationDataState = (mutationKey: MutationKey) => {
  const data = useMutationState({
    filters: { mutationKey },
    select: (mutation) => {
      return {
        variables: mutation.state.variables as any,
        status: mutation.state.status,
      };
    },
  });

  const latestVariables = data[data.length - 1];
  return { latestVariables };
};

// Example usage
// const { latestVariables } = useMutationDataState(["updateUser"]);
// console.log(latestVariables); // { id: 1, name: "John Doe" }
