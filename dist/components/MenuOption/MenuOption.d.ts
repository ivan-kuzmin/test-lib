import React, { ButtonHTMLAttributes } from 'react';
export declare type MenuOption = {
    className?: string;
    icon?: string | React.ReactNode;
    title?: string;
    subtitle?: string;
    inline?: boolean;
    hovered?: boolean;
    isFocused?: boolean;
    isSelected?: boolean;
    secondaryIcon?: React.ReactNode;
    rounded?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const MenuOption: React.FC<MenuOption>;
