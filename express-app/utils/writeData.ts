import jsonfile from "jsonfile";
import readData from "./readData";
import {Orders} from "../../common";

const writeData = async (json: Orders) => {
    try {
        const originJSON = await readData();

        originJSON.orders.push(json);

        const data = await jsonfile.writeFileSync('data.json', originJSON, { spaces: 2 });

        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};

export default writeData;