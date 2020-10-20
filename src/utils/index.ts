import { withNaming } from '@bem-react/classname';

export const bemClassName = withNaming({
  n: '',
  e: '__',
  m: '_',
  v: '_',
});

export const bemCssModules = (
  style: { [key: string]: string },
  className: string
): ((...args: any) => string) => {
  const bem = bemClassName(className);
  return (...args: any): string => {
    let mixins: Array<string> = [];
    const argsWithoutMixins = args.map((arg: any) => {
      if (Array.isArray(arg)) {
        mixins = mixins.concat(arg);
        return false;
      }
      return arg;
    });
    const bemResultWithoutMixins = bem(...argsWithoutMixins).split(' ');
    const result = bemResultWithoutMixins
      .map((cn) => style[cn] || cn)
      .concat(mixins)
      .join(' ');
    return result;
  };
};

export const displayRate = (
  amount: string | number,
  currency: string,
  displayDigits: number,
  options?: { showCurrency?: boolean; useGrouping?: boolean; showTrailingZeros?: boolean }
) => {
  const showCurrency = (options && options.showCurrency) !== false;
  const useGrouping = (options && options.useGrouping) === true;
  const showTrailingZeros = (options && options.showTrailingZeros) === true;
  const validDisplayDigits = displayDigits < 0 ? 0 : displayDigits > 20 ? 20 : displayDigits;
  const number = typeof amount === 'string' ? +amount : amount;
  const formatOptions = {
    style: 'decimal',
    useGrouping,
  };
  const formatFractionDigits = number.toLocaleString('en-US', {
    ...formatOptions,
    minimumFractionDigits: showTrailingZeros ? validDisplayDigits : 0,
    maximumFractionDigits: validDisplayDigits,
  });
  const formatSignificantDigits = number.toLocaleString('en-US', {
    ...formatOptions,
    maximumSignificantDigits: 1,
  });
  const format = +number.toFixed(validDisplayDigits)
    ? formatFractionDigits
    : formatSignificantDigits;
  return showCurrency ? `${format} ${currency}` : format;
};

export const removeTrailingZeros = (exponentialNumber: number | string): string => {
  const str = (+exponentialNumber).toString();
  if (str.indexOf('e') !== -1) {
    const exponent = parseInt(str.split('-')[1], 10);
    const result = (+exponentialNumber).toFixed(exponent);
    return result;
  }
  return str;
};
