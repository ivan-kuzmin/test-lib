import React, { useRef, useEffect, useMemo } from 'react';
import Select, { components } from 'react-select';

import { bemCssModules } from '../../../utils';
import { MenuOption } from '../..';
import CheckIcon from './check.svg';
import style from './Menu.scss';

const cn = bemCssModules(style, 'Menu');

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

export interface Menu {
  className?: string;
  options: ReadonlyArray<Option>;
  isOpen?: boolean;
  setIsOpen?: (value: boolean) => void;
  setValue: (value: string) => void;
  grouped?: boolean;
  value?: Option;
  colourStyles: any;
}

export const Menu: React.FC<Menu> = ({
  className,
  options,
  isOpen,
  setIsOpen,
  setValue,
  grouped,
  value,
  colourStyles,
}) => {
  const ref = useRef<any>(null);
  const groupedCn = grouped ? 'grouped' : '';

  useEffect(() => {
    if (isOpen && ref.current) ref.current.focus();
  }, [isOpen]);

  const onBlur = () => {
    if (setIsOpen && isOpen) {
      setIsOpen(false);
      if (ref.current) ref.current.blur();
    }
  };

  const onChange = (option: Option) => {
    onBlur();
    setValue(option?.value || '');
  };

  return (
    <Select
      ref={ref}
      className={cn(null, [className])}
      value={value}
      options={options}
      styles={colourStyles}
      isSearchable={false}
      menuIsOpen={isOpen}
      onBlur={onBlur}
      onChange={onChange}
      tabIndex="-1"
      components={{
        ValueContainer(props) {
          return useMemo(() => <components.ValueContainer {...props} />, []);
        },
        Menu(props) {
          return <components.Menu {...props} className={groupedCn} />;
        },
        GroupHeading(props) {
          return useMemo(() => <components.GroupHeading {...props} />, []);
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
                secondaryIcon={useMemo(
                  () => (
                    <CheckIcon style={{ marginLeft: 'auto', opacity: isSelected ? 1 : 0 }} />
                  ),
                  []
                )}
              />
            </components.Option>
          );
        },
      }}
    />
  );
};
