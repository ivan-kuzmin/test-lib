import React from 'react';
export declare type Option = {
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
export declare type Options = ReadonlyArray<Option>;
export declare type Select = {
    className?: string;
    options: Options;
    isSearchable?: boolean;
    label?: string;
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
};
export declare const Select: React.FC<Select>;
