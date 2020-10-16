import React, { ButtonHTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';
import { Loader } from '../..';
import style from './Button.scss';

const cn = bemCssModules(style, 'Button');

export type Button = {
  secondary?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Button> = ({
  children,
  className,
  secondary,
  type = 'button',
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={cn({ secondary }, [className, 'base-box'])}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <Loader className={cn('loader')} color="currentColor" size={40} /> : children}
    </button>
  );
};
