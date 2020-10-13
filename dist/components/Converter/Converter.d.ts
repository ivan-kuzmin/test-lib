import React from 'react';
import { SelectInput } from '../..';
declare type SelectInputData = {
    amount: [SelectInput['value'], (value: string) => void];
    currency: [string | undefined, SelectInput['onChangeSelect']];
    currencies: SelectInput['options'];
};
export interface Converter {
    className?: string;
    from: SelectInputData;
    to: SelectInputData;
    error?: SelectInput['error'];
    fixFromCurrency?: boolean;
    fixToCurrency?: boolean;
}
export declare const Converter: React.FC<Converter>;
export {};
