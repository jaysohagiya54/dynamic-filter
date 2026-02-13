// Field types that can be filtered
export const FieldType = {
    TEXT: 'TEXT',
    NUMBER: 'NUMBER',
    DATE: 'DATE',
    AMOUNT: 'AMOUNT',
    SINGLE_SELECT: 'SINGLE_SELECT',
    MULTI_SELECT: 'MULTI_SELECT',
    BOOLEAN: 'BOOLEAN',
} as const;
export type FieldType = typeof FieldType[keyof typeof FieldType];

// Operators for each field type
export const TextOperator = {
    EQUALS: 'TEXT_EQUALS',
    CONTAINS: 'TEXT_CONTAINS',
    STARTS_WITH: 'TEXT_STARTS_WITH',
    ENDS_WITH: 'TEXT_ENDS_WITH',
    NOT_CONTAINS: 'TEXT_NOT_CONTAINS',
} as const;
export type TextOperator = typeof TextOperator[keyof typeof TextOperator];

export const NumberOperator = {
    EQUALS: 'NUMBER_EQUALS',
    GT: 'NUMBER_GT',
    LT: 'NUMBER_LT',
    GTE: 'NUMBER_GTE',
    LTE: 'NUMBER_LTE',
} as const;
export type NumberOperator = typeof NumberOperator[keyof typeof NumberOperator];

export const DateOperator = {
    BETWEEN: 'DATE_BETWEEN',
} as const;
export type DateOperator = typeof DateOperator[keyof typeof DateOperator];

export const AmountOperator = {
    BETWEEN: 'AMOUNT_BETWEEN',
} as const;
export type AmountOperator = typeof AmountOperator[keyof typeof AmountOperator];

export const SingleSelectOperator = {
    IS: 'SELECT_IS',
    IS_NOT: 'SELECT_IS_NOT',
} as const;
export type SingleSelectOperator = typeof SingleSelectOperator[keyof typeof SingleSelectOperator];

export const MultiSelectOperator = {
    IN: 'MULTI_IN',
    NOT_IN: 'MULTI_NOT_IN',
} as const;
export type MultiSelectOperator = typeof MultiSelectOperator[keyof typeof MultiSelectOperator];

export const BooleanOperator = {
    IS: 'BOOL_IS',
} as const;
export type BooleanOperator = typeof BooleanOperator[keyof typeof BooleanOperator];

// Union type of all operators
export type Operator =
    | TextOperator
    | NumberOperator
    | DateOperator
    | AmountOperator
    | SingleSelectOperator
    | MultiSelectOperator
    | BooleanOperator;

// Filter condition with discriminated unions based on field type
export type FilterCondition =
    | {
        id: string;
        field: string;
        fieldType: typeof FieldType.TEXT;
        operator: TextOperator;
        value: string;
    }
    | {
        id: string;
        field: string;
        fieldType: typeof FieldType.NUMBER;
        operator: NumberOperator;
        value: number;
    }
    | {
        id: string;
        field: string;
        fieldType: typeof FieldType.DATE;
        operator: DateOperator;
        value: { start: string; end: string }; // ISO date strings
    }
    | {
        id: string;
        field: string;
        fieldType: typeof FieldType.AMOUNT;
        operator: AmountOperator;
        value: { min: number; max: number };
    }
    | {
        id: string;
        field: string;
        fieldType: typeof FieldType.SINGLE_SELECT;
        operator: SingleSelectOperator;
        value: string;
    }
    | {
        id: string;
        field: string;
        fieldType: typeof FieldType.MULTI_SELECT;
        operator: MultiSelectOperator;
        value: string[];
    }
    | {
        id: string;
        field: string;
        fieldType: typeof FieldType.BOOLEAN;
        operator: BooleanOperator;
        value: boolean;
    };

// Field definition for configuration
export interface FieldDefinition {
    key: string;
    label: string;
    type: FieldType;
    path?: string; // For nested fields like 'address.city'
    options?: string[]; // For SINGLE_SELECT and MULTI_SELECT
}

// Filter state
export interface FilterState {
    conditions: FilterCondition[];
}
