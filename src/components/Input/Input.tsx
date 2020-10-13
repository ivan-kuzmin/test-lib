import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

import { bemCssModules } from '../../utils';
import { AttentionIcon, InvisibleIcon, VisibleIcon } from './icons';
import style from './Input.scss';

const cn = bemCssModules(style, 'Input');

export type Input = {
  className?: string;
  disabled?: boolean;
  label?: string;
  active?: boolean;
  error?: string | boolean;
  hideVisibilityIcon?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

/**
 * Input *description*.
 */
export const Input = forwardRef<HTMLInputElement, Input>(function Input(props, ref) {
  const { className, children, label, active, error, type, hideVisibilityIcon, ...rest } = props;
  const [visible, setVisible] = useState(type !== 'password');

  return (
    <div className={cn(null, [className])}>
      <div className={cn('input-block')}>
        <input
          ref={ref}
          className={cn(
            'input',
            { withLabel: !!label, withSelect: !!children, active, error: !!error },
            ['base-box']
          )}
          type={type !== 'password' ? type : visible ? 'text' : 'password'}
          {...rest}
        />
        {label && (
          <div className={cn('label', { withSelect: !!children, error: !!error })}>{label}</div>
        )}
        <div className={cn('select')}>{children}</div>
        {!hideVisibilityIcon && type === 'password' && (
          <button className={cn('eye')} type="button" onClick={() => setVisible(!visible)}>
            {visible ? <VisibleIcon /> : <InvisibleIcon />}
          </button>
        )}
      </div>
      {typeof error === 'string' && (
        <div className={cn('error')}>
          <AttentionIcon className={cn('error-icon')} />
          {error}
        </div>
      )}
    </div>
  );
});
