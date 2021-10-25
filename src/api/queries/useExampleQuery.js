/* eslint-disable no-console */
import { useQuery } from "@apollo/client";
import { EXAMPLE_QUERY } from "../../queries";

export const useExampleQuery = () => {
  const { loading, error, data } = useQuery(EXAMPLE_QUERY);

  const returnObject = {
    error,
    loading,
    data,
  };

  return returnObject;
};
