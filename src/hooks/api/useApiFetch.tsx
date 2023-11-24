import { useEffect, useState } from "react";

type Options = {
  refreshInterval: number;
};

const useFetch = (url: string, options: Options) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const token = process.env.REACT_APP_TOKEN;
    const base_url = process.env.REACT_APP_BASE_URL;

    const fetchData = async () => {
      try {
        const response = await fetch(base_url + url, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Erro na requisição");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    const intervalId = setInterval(fetchData, options.refreshInterval);

    return () => clearInterval(intervalId);
  }, [url, options.refreshInterval]);

  return { data, loading, error };
};

export default useFetch;
