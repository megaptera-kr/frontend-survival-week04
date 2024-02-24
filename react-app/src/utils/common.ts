export default function moneyformat(price: number): string {
  return new Intl.NumberFormat().format(price);
}
