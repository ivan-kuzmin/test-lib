import React from 'react';
import { Input } from '../../..';
import { Menu } from '../Menu';
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
export declare const MoneyInput: React.FC<MoneyInput>;
