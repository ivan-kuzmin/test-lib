import React from 'react';

import { bemCssModules } from '../../../utils';

import McIcon from './mc_icon.svg';
import VisaIcon from './visa_icon.svg';
import style from './Card.scss';

const cn = bemCssModules(style, 'Card');

export interface Card {
  className?: string;
  number: string;
  paymentSystem: 'visa' | 'mastercard';
}

export const Card: React.FC<Card> = ({ className, number, paymentSystem }) => {
  return (
    <div className={cn(null, [className])}>
      {number && <div className={cn('number')}>{`*${number.slice(-4)}`}</div>}
      <div className={cn('icon', { paymentSystem })}>
        {paymentSystem === 'visa' ? (
          <VisaIcon />
        ) : paymentSystem === 'mastercard' ? (
          <McIcon />
        ) : null}
      </div>
    </div>
  );
};
