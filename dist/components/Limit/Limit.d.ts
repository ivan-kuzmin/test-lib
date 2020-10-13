import React, { HTMLAttributes } from 'react';
import { ProgressBar } from '../ProgressBar';
import { Card } from './Card';
export declare type Limit = {
    className?: string;
    min?: number;
    max?: number;
    value: ProgressBar['value'];
    title?: string;
    critical?: number;
    card?: {
        number: Card['number'];
        paymentSystem: Card['paymentSystem'];
    };
} & HTMLAttributes<HTMLDivElement>;
export declare const Limit: React.FC<Limit>;
