import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIspending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIspending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data =await req.json();
        setData(data);
        setIspending(false);
      } catch (err) {
        setError(err.message);
        console.log(err.message);
        setIspending(false);
      } finally {
        setIspending(false);
      }
    };
    getData();
  }, [url]);
  return { data, error, isPending };
};

