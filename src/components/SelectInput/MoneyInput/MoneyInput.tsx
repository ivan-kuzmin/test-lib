import React, { useState, useMemo } from 'react';
import shortid from 'shortid';

import { bemCssModules } from '../../../utils';
import { Input, Circle } from '../../..';
import { Menu } from '../Menu';
import style from './MoneyInput.scss';

const cn = bemCssModules(style, 'MoneyInput');

export interface MoneyInput {
  className?: string;
  label?: Input['label'];
  value: Input['value'];
  currency?: string;
  currencyIcon?: string;
  menuIsOpen: boolean;
  onChange: Input['onChange'];
  onClick: () => void;
  grouped?: boolean;
  error?: Input['error'];
  disabled?: boolean;
  options: Menu['options'];
  setCurrency: (currency: string) => void;
}

export const MoneyInput: React.FC<MoneyInput> = ({
  className,
  label,
  menuIsOpen,
  value,
  currency,
  currencyIcon,
  onChange,
  onClick,
  grouped,
  error,
  disabled,
  options,
  setCurrency,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const onFocusInput = () => {
    setIsFocused(true);
  };

  const onBlurInput = () => {
    setIsFocused(false);
  };

  return (
    <Input
      className={cn(null, [className])}
      label={label}
      placeholder="0.00"
      active={menuIsOpen && !grouped}
      style={{ borderRadius: menuIsOpen ? '4px 4px 0 0' : '4px' }}
      value={isFocused ? value : value && currency ? `${value} ${currency}` : ''}
      onChange={onChange}
      onFocus={onFocusInput}
      onBlur={onBlurInput}
      error={error}
    >
      <select
        className={cn('select')}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {options.map((option) =>
          grouped ? (
            <optgroup key={shortid.generate()} label={option.label}>
              {option.options?.map((item) => (
                <option key={shortid.generate()} value={item.value}>
                  {item.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={shortid.generate()} value={option.value}>
              {option.label}
            </option>
          )
        )}
      </select>
      {useMemo(
        () => (
          <button
            className={cn('button', { disabled: menuIsOpen || disabled })}
            type="button"
            onClick={onClick}
            disabled={disabled}
          >
            <Circle className={cn('circle', { menuIsOpen, active: menuIsOpen && grouped })}>
              {currencyIcon && <img className={cn('icon')} src={currencyIcon} alt="" />}
            </Circle>
          </button>
        ),
        [menuIsOpen, onClick, currencyIcon]
      )}
    </Input>
  );
};
