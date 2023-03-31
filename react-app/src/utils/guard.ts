export function hasId<T>(arg: T): arg is {id: string} & T {
  if (typeof arg !== 'object' || arg === null) return false;

  return Object.keys(arg).includes('id');
}

export default hasId;
