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
