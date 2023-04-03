export type WithoutId<T> = Exclude<keyof T, 'id'>;

export type WithId<T> = {
  id: string
} & T;
