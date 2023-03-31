export type WithoutId<T> = Exclude<keyof T, 'id'>;
