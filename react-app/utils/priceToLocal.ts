type PriceToLocalOption = {
  locales?: Intl.LocalesArgument,
  options?: Intl.NumberFormatOptions
}

export default function priceToLocal(
  price: number,
  options: PriceToLocalOption = {
    locales: 'ko',
    options: {
      currency: 'KRW',
    },
  },
) {
  return price.toLocaleString(options.locales, options.options);
}
