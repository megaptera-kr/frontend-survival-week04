import { Request, Response } from 'express';
import { PATH, RestaurantsType, StatusCode } from '../../common';
import CustomResponse from '../utils/CustomResponse';
import { readData } from '../utils/jsonFile';

const getRestaurants = async (req: Request, res: Response) => {
  try {
    const data = await readData<RestaurantsType>(PATH.restaurants);

    const response = new CustomResponse(StatusCode.OK, 'Success', data);

    return res.send(response);
  } catch (error) {
    const response = new CustomResponse(StatusCode.BAD_REQUEST, 'Fail getRestaurants', null);
    return res.send(response);
  }
};

export {
  getRestaurants,
};
