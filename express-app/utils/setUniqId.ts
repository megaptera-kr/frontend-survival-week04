const setUniqId = <T>({ prefix, data }: { prefix: string, data: T }): T => ({
  ...data,
  id: `${prefix}__${Date.now().toString()}`,
});

export default setUniqId;
