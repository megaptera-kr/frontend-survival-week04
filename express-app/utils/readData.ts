import jsonfile from 'jsonfile';
import {DataType, PathKeyType} from "../../common";

const readData = async <T = DataType>(key?: PathKeyType): Promise<T> => {
    try {
        const data = await jsonfile.readFileSync('data.json', 'utf8');

        if (key) {
            return data[key];
        }

        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default readData;