export const alreadyHasItem = <T>(data: T[],
  cb: (key: T) => boolean): boolean => data.filter(cb).length > 0;

export default alreadyHasItem;
