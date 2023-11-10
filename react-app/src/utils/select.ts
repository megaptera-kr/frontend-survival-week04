export default function select<T, V>(items: T[], key: keyof T, value: V) {
  return items.filter((item) => item[key] === value);
}
