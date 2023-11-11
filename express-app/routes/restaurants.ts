import {Request, Response} from "express";
import readData from "../utils/readData";
import {PATH, RestaurantsType} from "../../common";

const getRestaurants = async (req: Request, res: Response) => {
    try {
        const data = await readData<RestaurantsType>(PATH.restaurants);

        return res.status(200).send({ message: 'Success', data: data });
    } catch (error) {
        return res.status(400).send({ message: 'Fail getRestaurants', data: null })
    }
};

export {
    getRestaurants
}