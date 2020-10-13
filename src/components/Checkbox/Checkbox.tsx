import React, { ButtonHTMLAttributes } from 'react';

import { bemCssModules } from '../../utils';
import style from './Checkbox.scss';

const cn = bemCssModules(style, 'Checkbox');

export type Checkbox = {
  checked?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Checkbox: React.FC<Checkbox> = ({ className, checked, type, ...rest }) => {
  return <button type={type || 'button'} className={cn({ checked }, [className])} {...rest} />;
};
