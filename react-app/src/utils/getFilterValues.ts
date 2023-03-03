export default function getFilterValues<T, K>(key: keyof T, list: T[]): K[] {
  return Array.from(new Set(list.map((data) => data[key] as K))) || [];
}
