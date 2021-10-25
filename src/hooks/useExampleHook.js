import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const returnObject = {
    isLoading,
    setIsLoading,
  };

  return returnObject;
};
