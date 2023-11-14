import jsonfile from 'jsonfile';
import { DataType, Orders, PathKeyType } from '../../common';

const readData = async <T = DataType>(key?: PathKeyType): Promise<T> => {
  try {
    const data = await jsonfile.readFileSync('data.json', 'utf8');

    if (key) {
      return data[key];
    }

    return data;
  } catch (error) {
    throw error;
  }
};

const writeData = async (json: Orders) => {
  try {
    const originJSON = await readData();

    originJSON.orders.push(json);

    const data = await jsonfile.writeFileSync('data.json', originJSON, { spaces: 2 });

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  readData,
  writeData,
};
