const toLocaleCurrency = (value?: number): string => {
  if (typeof value === 'undefined') {
    return '';
  }

  return value.toLocaleString('kr');
};

export default toLocaleCurrency;
