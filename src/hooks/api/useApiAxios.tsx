import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const useAxios = (url: string, method: string, options: AxiosRequestConfig = {}) => {
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios({ url, method, ...options });
        setResponse(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
      }
    };
    fetchData();
  }, [url, method, options]);

  return { response, error, isLoading };
};
