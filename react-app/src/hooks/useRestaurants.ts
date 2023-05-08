import { useState } from 'react';
import fetch from 'node-fetch';
import FetchOptions from '../types/FetchOptions';
import Restaurant from '../types/Restaurant';
import fetchUtils from '../utils/fetchUtils';

export default function useRestaurants():Restaurant[] {
  const [resturants, setRestaurants] = useState<Restaurant[]>([]);

  const url = `${fetchUtils().authority}/restaurants`;
  const options: FetchOptions = {
    method: 'GET',
    mode: 'cors',
  };
  const fetchRestaurants = async () => {
    try {
      const response = await fetch(url, options);
      const dat = await response.json();
      setRestaurants(dat.restaurants);
    } catch (error) {
      setRestaurants([]);
    }
  };
  fetchRestaurants();
  return resturants;
}
