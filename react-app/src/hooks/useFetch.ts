/* eslint-disable import/no-extraneous-dependencies */
import { useState, useEffect, SetStateAction } from 'react';
import fetch from 'node-fetch';

const useFetch = (url:string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res: { json: () => any; }) => res.json())
      .then((jsonData: SetStateAction<null>) => setData(jsonData));
  }, [url]);

  return [data];
};

export default useFetch;
