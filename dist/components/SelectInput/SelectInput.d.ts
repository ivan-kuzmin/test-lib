import React from 'react';
import { Input } from '../../..';
import { Menu } from './Menu';
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
export declare const SelectInput: React.FC<SelectInput>;
