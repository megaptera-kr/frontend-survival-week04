import Food from './Food';

type Receipt = {
  id : string,
  menu : Food[],
  totalPrice : number
}

export default Receipt;
