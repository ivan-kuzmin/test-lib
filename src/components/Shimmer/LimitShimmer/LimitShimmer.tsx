import React from 'react';

import { bemCssModules } from '../../../utils';
import { Shimmer } from '../../..';

import style from './LimitShimmer.scss';

const cn = bemCssModules(style, 'LimitShimmer');

export interface LimitShimmer {
  className?: string;
  card?: boolean;
}

export const LimitShimmer: React.FC<LimitShimmer> = ({ className, card }) => {
  return (
    <div className={cn({ card }, [className])}>
      {!card && <Shimmer className={cn('title')} />}
      {card && <Shimmer className={cn('card')} />}
      <Shimmer className={cn('progress', { card })} />
      <Shimmer className={cn('min')} />
      <Shimmer className={cn('max')} />
    </div>
  );
};
