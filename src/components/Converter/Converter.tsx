import React, { useMemo } from 'react';

import { bemCssModules } from '../../utils';
import { useIsMobile } from '../../utils/customHooks';
import { SelectInput } from '../..';
import { ArrowIcon } from './icons';
import style from './Converter.scss';

const cn = bemCssModules(style, 'Converter');

type SelectInputData = {
  amount: [SelectInput['value'], (value: string) => void];
  currency: [string | undefined, SelectInput['onChangeSelect']];
  currencies: SelectInput['options'];
};

export interface Converter {
  className?: string;
  from: SelectInputData;
  to: SelectInputData;
  error?: SelectInput['error'];
  fixFromCurrency?: boolean;
  fixToCurrency?: boolean;
  fromLabel?: SelectInput['label'];
  toLabel?: SelectInput['label'];
}

export const Converter: React.FC<Converter> = ({
  className,
  from,
  to,
  error,
  fixFromCurrency,
  fixToCurrency,
  fromLabel,
  toLabel,
}) => {
  const [refCallback, isMobile] = useIsMobile();

  return (
    <div className={cn({ isMobile }, [className])} ref={refCallback}>
      <SelectInput
        className={cn('input')}
        label={fromLabel || 'From'}
        value={from.amount[0]}
        onChange={(e) => from.amount[1](e.target.value)}
        selectValue={from.currency[0]}
        onChangeSelect={from.currency[1]}
        options={from.currencies}
        error={error}
        disabled={fixFromCurrency}
      />
      {useMemo(
        () => (
          <ArrowIcon className={cn('icon', { isMobile })} />
        ),
        [isMobile]
      )}
      <SelectInput
        className={cn('input')}
        label={toLabel || 'To'}
        value={to.amount[0]}
        onChange={(e) => to.amount[1](e.target.value)}
        selectValue={to.currency[0]}
        onChangeSelect={to.currency[1]}
        options={to.currencies}
        error={error}
        disabled={fixToCurrency}
      />
    </div>
  );
};
