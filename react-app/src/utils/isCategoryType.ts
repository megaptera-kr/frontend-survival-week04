import { CategoryType } from '../types/categoryType';

export default function isCategoryType(value: string): value is CategoryType {
  return ['전체', '중식', '한식', '일식'].includes(value);
}
