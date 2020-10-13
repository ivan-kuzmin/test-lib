import React from 'react';

import { bemCssModules } from '../../../utils';
import { Shimmer } from '../../..';

import style from './MenuOptionShimmer.scss';

const cn = bemCssModules(style, 'MenuOptionShimmer');

export interface MenuOptionShimmer {
  className?: string;
  inline?: boolean;
  withoutIcon?: boolean;
}

export const MenuOptionShimmer: React.FC<MenuOptionShimmer> = ({
  className,
  inline,
  withoutIcon,
}) => {
  return (
    <div className={cn({ inline, withoutIcon }, [className])}>
      {!withoutIcon && <Shimmer className={cn('icon')} />}
      {!inline && <Shimmer className={cn('title')} />}
      <Shimmer className={cn('subtitle')} />
    </div>
  );
};
