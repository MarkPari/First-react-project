import axios from 'axios';
import React, {useState, Dispatch, SetStateAction, useEffect } from 'react';

export const useData = <T>(url: string, defaultValue: T): [T,  Dispatch<SetStateAction<T>>, boolean, any] => {
    const [data, setData] = useState<T>(defaultValue);
  const [errors, setErrors] = useState<any | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const loadData = async () => {
    try {
      setLoading(true);
      setErrors(null);
      const {
        data: { results },
      } = (await axios.get(`https://rickandmortyapi.com/api/${url}`)) as {
        data: {
          resultCount: number;
          results: T;
        };
      };
      setData(results);
    } catch (err) {
      setErrors(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    url && loadData();
  }, [url]);
  return [data, setData, isLoading, errors];

    /*useEffect(()=>{
        setLoading(true)
        if(url){fetch('https://rickandmortyapi.com/api/').then((res)=> res.json())
        .then(res=>setData(res.results)).finally(()=>setLoading(false));}
    }, [url])
    
    return [data, setData, isLoading]*/
}