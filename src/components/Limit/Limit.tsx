import React, { HTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';
import { ProgressBar } from '../ProgressBar';

import { Card } from './Card';
import style from './Limit.scss';

const cn = bemCssModules(style, 'Limit');

export type Limit = {
  className?: string;
  min?: number;
  max?: number;
  value: ProgressBar['value'];
  title?: string;
  critical?: number;
  card?: {
    number: Card['number'];
    paymentSystem: Card['paymentSystem'];
  };
} & HTMLAttributes<HTMLDivElement>;

export const Limit: React.FC<Limit> = ({
  className,
  min = 0,
  max = 100,
  value,
  title,
  critical = 10,
  card,
}) => {
  const percent = ((value - min) * 100) / (max - min);
  const isCritical = percent <= critical;

  return (
    <div className={cn({ critical: isCritical, card: !!card }, [className])}>
      {card ? <Card number={card.number} paymentSystem={card.paymentSystem} /> : <div>{title}</div>}
      <div className={cn('content')}>
        <ProgressBar
          className={cn('progress-bar', { critical: isCritical, card: !!card })}
          value={percent}
        />
        <div className={cn('description')}>
          <div className={cn('value', { critical: isCritical })}>{value.toFixed(4)}</div>
          <div className={cn('max')}>{max.toFixed(4)}</div>
        </div>
      </div>
    </div>
  );
};
