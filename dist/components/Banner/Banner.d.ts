import React, { HTMLAttributes } from 'react';
export declare type Banner = {
    className?: string;
    icon: React.FC<{
        className?: string;
    }>;
    image: React.FC<{
        className?: string;
    }>;
} & HTMLAttributes<HTMLButtonElement>;
export declare const Banner: React.FC<Banner>;
