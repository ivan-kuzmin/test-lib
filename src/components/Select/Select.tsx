import React, { useRef, useEffect, useState } from 'react';
import ReactSelect, { components } from 'react-select';
import shortid from 'shortid';

import { bemCssModules } from '../../utils';
import { MenuOption } from '../..';

import ArrowIcon from './arrow_icon.svg';
import CheckIcon from './check.svg';
import style from './Select.scss';

const cn = bemCssModules(style, 'Select');

const colourStyles: any = {
  container: (base) => ({
    ...base,
    height: '64px',
    background: 'transparent',
  }),
  control: (base, { isFocused, menuIsOpen }) => ({
    ...base,
    height: '100%',
    cursor: 'pointer',
    background: menuIsOpen ? 'var(--color-white)' : 'var(--color-coffee-light)',
    borderRadius: menuIsOpen ? '4px 4px 0 0' : '4px',
    border: isFocused
      ? 'solid var(--color-blue-primary) 1px'
      : 'solid var(--color-coffee-light) 1px',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'none',
    },
    '&.grouped': {
      background: 'var(--color-coffee-light)',
      border: 'solid var(--color-coffee-light) 1px',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0 var(--gap-2x)',
    '&.withLabel': {
      padding: '29px var(--gap-2x) 11px',
    },
  }),
  input: (base) => ({
    ...base,
    paddingTop: '0',
    paddingBottom: '0',
    marginTop: '0',
    marginBottom: '0',
    '&.withLabel': {},
  }),
  singleValue: (base, { selectProps: { menuIsOpen, isSearchable } }) => ({
    ...base,
    display: menuIsOpen && isSearchable ? 'none' : 'block',
    '&.withLabel': {
      position: 'static',
      transform: 'none',
      margin: '0',
    },
  }),
  indicatorsContainer: () => ({ display: 'none' }),
  placeholder: (base, { selectProps: { menuIsOpen, isSearchable } }) => ({
    ...base,
    margin: '0',
    position: 'static',
    transform: 'none',
    color: 'var(--color-black-secondary)',
    display: menuIsOpen && isSearchable ? 'none' : 'block',
  }),
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

export type Option = {
  label: string;
  value?: string;
  icon?: string;
  type?: 'wallet';
  options?: ReadonlyArray<{
    label: string;
    value: string;
    icon: string;
    type?: 'wallet';
  }>;
};
export type Options = ReadonlyArray<Option>;

export type Select = {
  className?: string;
  options: Options;
  isSearchable?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
};

export const Select: React.FC<Select> = ({
  className,
  options,
  value,
  onChange,
  isSearchable,
  label,
  placeholder,
}) => {
  const grouped = !!options.find((option) => !!option?.options);
  const groupedCn = grouped ? 'grouped' : '';
  const withLabelCn = label ? 'withLabel' : '';
  const ref = useRef<any>(null);
  const [commonValue, setCommonValue] = useState(value);

  useEffect(() => {
    setCommonValue(value);
  }, [value]);

  const getOptionByValue = () => {
    const findByValue = (array?: Options) => array?.find((item) => item.value === commonValue);
    return grouped
      ? findByValue(options.find((option) => findByValue(option?.options))?.options)
      : findByValue(options);
  };

  return (
    <div className={cn(null, [className])}>
      <ReactSelect
        className={cn('react-select')}
        ref={ref}
        value={getOptionByValue()}
        options={options}
        styles={colourStyles}
        isSearchable={isSearchable}
        onChange={(option) => {
          if (onChange) onChange((option as Option)?.value || '');
          setCommonValue((option as Option)?.value);
          if (ref.current) ref.current.blur(); // react-select focus bug
        }}
        placeholder={placeholder}
        components={{
          Control(props) {
            return <components.Control {...props} className={groupedCn} />;
          },
          ValueContainer(props) {
            return <components.ValueContainer {...props} className={withLabelCn} />;
          },
          SingleValue(props) {
            return <components.SingleValue {...props} className={withLabelCn} />;
          },
          Menu(props) {
            return <components.Menu {...props} className={groupedCn} />;
          },
          Option(props) {
            const { data, isSelected, isFocused } = props;
            return (
              <components.Option {...props} className={groupedCn}>
                <MenuOption
                  className="custom-select-option"
                  icon={data.icon}
                  title={data.label}
                  subtitle={data.rate}
                  isFocused={isFocused}
                  isSelected={isSelected}
                  hovered={false}
                  rounded={false}
                  inline={data.type !== 'wallet'}
                  secondaryIcon={
                    <CheckIcon style={{ marginLeft: 'auto', opacity: isSelected ? 1 : 0 }} />
                  }
                />
              </components.Option>
            );
          },
        }}
      />
      <select
        className={cn('select')}
        defaultValue={commonValue}
        value={commonValue}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
          setCommonValue(e.target.value);
        }}
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
      <div className={cn('label')}>{label}</div>
      <ArrowIcon className={cn('icon')} />
    </div>
  );
};
