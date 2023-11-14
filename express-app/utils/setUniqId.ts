const setUniqId = <T>(data: T): T => ({
  ...data,
  id: Date.now().toString(),
});

export default setUniqId;
