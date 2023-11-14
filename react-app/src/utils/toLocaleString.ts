const toLocaleString = (value: string | number, options = { format: 'ko-KR', unit: '원' } ) => `${Number(value).toLocaleString(options.format)}${options.unit}`;

export default toLocaleString;