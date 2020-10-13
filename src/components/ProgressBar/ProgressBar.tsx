import React, { HTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';

import style from './ProgressBar.scss';

const cn = bemCssModules(style, 'ProgressBar');

export type ProgressBar = {
  className?: string;
  value: number;
} & HTMLAttributes<HTMLDivElement>;

export const ProgressBar: React.FC<ProgressBar> = ({ className, value }) => {
  return (
    <div className={cn(null, [className])}>
      <div
        className={cn('value')}
        style={{
          transform: `translateX(${value > 100 ? 100 : value < 0 ? 0 : value}%)`,
        }}
      />
    </div>
  );
};
