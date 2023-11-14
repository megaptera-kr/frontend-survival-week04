import { Request, Response } from 'express';
import { Orders, PATH, StatusCode } from '../../common';
import CustomResponse from '../utils/CustomResponse';
import { writeData } from '../utils/jsonFile';
import setUniqId from '../utils/setUniqId';

const postOrders = async (req: Request, res: Response) => {
  try {
    const orders = setUniqId<Orders>(req.body);

    await writeData(orders);

    const response = new CustomResponse(StatusCode.CREATED, 'Success', orders);
    return res.send(response);
  } catch (error) {
    const response = new CustomResponse(StatusCode.BAD_REQUEST, 'Fail postOrders', null);
    return res.send(response);
  }
};

export {
  postOrders,
};
