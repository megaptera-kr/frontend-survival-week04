export default function filterByName<T extends { name: string }>(
  list: T[],
  searchText: string
): T[] {
  return list.filter((item) => item.name.includes(searchText.trim()));
}
