import React, { HTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';

import style from './Shimmer.scss';

const cn = bemCssModules(style, 'Shimmer');

export type Shimmer = {
  className?: string;
  dark?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Shimmer: React.FC<Shimmer> = ({ className, dark, ...rest }) => {
  return <div className={cn({ dark }, [className])} {...rest} />;
};
