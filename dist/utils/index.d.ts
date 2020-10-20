export declare const bemClassName: import("@bem-react/classname").ClassNameInitilizer;
export declare const bemCssModules: (style: {
    [key: string]: string;
}, className: string) => (...args: any) => string;
export declare const displayRate: (amount: string | number, currency: string, displayDigits: number, options?: {
    showCurrency?: boolean | undefined;
    useGrouping?: boolean | undefined;
    showTrailingZeros?: boolean | undefined;
} | undefined) => string;
export declare const removeTrailingZeros: (exponentialNumber: number | string) => string;
