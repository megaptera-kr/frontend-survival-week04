import {Request, Response} from "express";
import writeData from "../utils/writeData";
import createId from "../utils/createId";
import {PATH} from "../../common";

const postOrders = async (req: Request, res: Response) => {
    try {
        const orders = {
            ...req.body,
            id: createId(PATH.orders),
        }

        await writeData(orders);

        res.status(200).send({ message: 'Success', data: orders });
    } catch (error) {
        res.status(400).send({ message: 'Fail postOrders', data: null })
    }
};

export {
    postOrders
}