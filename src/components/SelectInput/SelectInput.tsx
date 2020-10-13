import React, { useState, useEffect } from 'react';

import { bemCssModules } from '../../utils';
import { Input } from '../../..';
import { MoneyInput } from './MoneyInput';
import { Menu } from './Menu';
import style from './SelectInput.scss';

const cn = bemCssModules(style, 'SelectInput');

export interface SelectInput {
  className?: string;
  value: Input['value'];
  label?: Input['label'];
  options: Menu['options'];
  onChange: Input['onChange'];
  selectValue?: string;
  onChangeSelect?: (value?: string) => void;
  error?: Input['error'];
  disabled?: boolean;
}

export const SelectInput: React.FC<SelectInput> = ({
  className,
  label,
  options,
  value,
  onChange,
  selectValue,
  onChangeSelect,
  error,
  disabled,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const firstOptionValue = options?.[0]?.value || options?.[0]?.options?.[0]?.value;
  const [currency, setCurrency] = useState(selectValue || firstOptionValue);

  useEffect(() => {
    setCurrency(selectValue || firstOptionValue);
  }, [selectValue]);

  useEffect(() => {
    if (onChangeSelect && currency) {
      onChangeSelect(getOptionByCurrency()?.value || firstOptionValue);
    }
  }, [currency]);

  useEffect(() => {
    if (!getOptionByCurrency()) setCurrency(firstOptionValue);
  }, [options]);

  const handleClick = () => {
    if (!menuIsOpen && !disabled) setMenuIsOpen(true);
  };

  const getOptionByCurrency = () => {
    const findByCurrency = (array?: SelectInput['options']) =>
      array?.find((cur) => cur.value === currency);
    return grouped
      ? findByCurrency(options.find((option) => findByCurrency(option?.options))?.options)
      : findByCurrency(options);
  };

  const grouped = !!options.find((option) => !!option?.options);

  const colourStyles = {
    container: (base) => ({
      ...base,
      background: 'transparent',
    }),
    control: () => ({ height: 0 }),
    valueContainer: () => ({ height: 0, opacity: 0 }),
    input: () => ({ display: 'none' }),
    indicatorsContainer: () => ({ display: 'none' }),
    placeholder: () => ({ display: 'none' }),
    dropdownIndicator: () => ({ display: 'none' }),
    indicatorSeparator: () => ({ display: 'none' }),
    menu: (base) => ({
      ...base,
      margin: '-1px 0 0 0',
      borderRadius: '0 0 4px 4px',
      boxShadow: 'none',
      border: 'solid var(--color-blue-primary) 1px',
      '&.grouped': {
        border: 'none',
        '&::after': {
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '1px',
          background: 'var(--color-black-disabled)',
        },
      },
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '320px',
      padding: 0,
      '& > *:last-child': {
        borderRadius: '0 0 4px 4px',
        overflow: 'hidden',
      },
    }),
    option: (base, { isFocused }) => ({
      ...base,
      padding: 0,
      background: 'none',
      color: isFocused ? 'var(--color-white)' : 'inherit',
      '& > .custom-select-option': {
        background: isFocused ? 'var(--color-orange-secondary)' : 'inherit',
        transition: 'none',
      },
      '&.grouped': {
        color: 'var(--color-black)',
        '& > .custom-select-option': {
          background: isFocused ? 'var(--color-coffee-primary)' : 'var(--color-coffee-light)',
        },
      },
    }),
    group: (base) => ({
      ...base,
      padding: 0,
      '&:first-of-type > *': {
        borderTop: 'none',
      },
    }),
    groupHeading: (base) => ({
      ...base,
      padding: 'var(--gap-2x) var(--gap-2x) 4px',
      margin: 0,
      background: 'var(--color-coffee-light)',
      fontWeight: 'bold',
      fontSize: 'var(--font-size-xs)',
      lineHeight: 'var(--line-height-xs)',
      color: 'var(--color-black)',
      textTransform: 'capitalize',
      borderTop: 'solid var(--color-black-disabled) 1px',
    }),
  };

  return (
    <div className={cn(null, [className])}>
      <MoneyInput
        className={cn('input')}
        label={label}
        menuIsOpen={menuIsOpen}
        value={value}
        currency={currency}
        currencyIcon={getOptionByCurrency()?.icon}
        onChange={onChange}
        onClick={handleClick}
        grouped={grouped}
        error={error}
        disabled={disabled}
        options={options}
        setCurrency={setCurrency}
      />
      <Menu
        value={getOptionByCurrency()}
        options={options}
        isOpen={menuIsOpen}
        setIsOpen={setMenuIsOpen}
        setValue={setCurrency}
        grouped={grouped}
        colourStyles={colourStyles}
      />
    </div>
  );
};
