'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const useJobFetch = (endpoint: any, query: any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '4d3d6967fcmshdf0771f99b04cbcp15b510jsna79e1e3d7b36',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.request(options);
        setData(res.data.data);
        setLoading(false);
      } catch (err : any) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };

};

export default useJobFetch;
