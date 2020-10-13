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
export declare const Menu: React.FC<Menu>;
