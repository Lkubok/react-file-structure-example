/* eslint-disable no-console */
import { useMutation } from "@apollo/client";
import { EXAMPLE_MUTATION } from "../../mutations";

export const useUpdateUser = () => {
  const [savePersonalInfo, { loading, error }] = useMutation(EXAMPLE_MUTATION, {
    onCompleted: (returnedData) => console.log(returnedData),
    onError: (e) => console.error("error", e),
  });

  const saveFunc = async (userInfoData) => {
    await savePersonalInfo({ variables: { input: userInfoData } });
  };

  const returnObject = {
    error,
    loading,
    savePersonalInfo: saveFunc,
  };

  return returnObject;
};
