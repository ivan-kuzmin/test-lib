import React from 'react';
export interface Card {
    className?: string;
    number: string;
    paymentSystem: 'visa' | 'mastercard';
}
export declare const Card: React.FC<Card>;
