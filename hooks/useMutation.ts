import {
  MutationFunction,
  MutationKey,
  QueryKey,
  useMutation,
  useMutationState,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useMutationData = (
  mutationKey: MutationKey,
  mutationFn: MutationFunction<any, any>,
  queryKey: QueryKey,
  OptimisticFn?: (previousData: any, variables: any) => void,
  onSuccess?: () => void
) => {
  // Creating a query client for Mutation
  const client = useQueryClient();
  return useMutation({
    mutationKey,
    mutationFn,
    onMutate: async (variables) => {
      await client.cancelQueries({
        queryKey: queryKey,
        exact: true,
      });
      // Optimistic update to the cache
      const previousData = client.getQueryData([queryKey]);
      client.setQueryData(
        [queryKey],
        OptimisticFn
          ? OptimisticFn(previousData, variables)
          : (previousData: any, variables: any) => ({
              ...previousData,
              ...variables,
            })
      );
      return { variables, previousData };
    },

    // onError: (error, variables, context) => {
    //   client.setQueryData([queryKey], context?.previousData);
    // },
    onSuccess(data) {
      if (onSuccess)
        onSuccess(); // Calling onSuccess if provided
      else {
        return toast("Success", {
          description: JSON.stringify(data),
        });
      }
    },
    onSettled: () => {
      return client.invalidateQueries({
        queryKey: [queryKey],
        exact: true,
      });
    },
  });
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
