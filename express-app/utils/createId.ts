const createId = (prefix?: string) => `${prefix}__${Date.now().toString()}`;

export default createId;