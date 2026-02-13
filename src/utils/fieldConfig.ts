import {
    FieldType,
    type FieldDefinition,
    TextOperator,
    NumberOperator,
    DateOperator,
    AmountOperator,
    SingleSelectOperator,
    MultiSelectOperator,
    BooleanOperator,
} from '../types/filter.types';

// Define all filterable fields with their configurations
export const FIELD_CONFIG: FieldDefinition[] = [
    {
        key: 'name',
        label: 'Name',
        type: FieldType.TEXT,
    },
    {
        key: 'email',
        label: 'Email',
        type: FieldType.TEXT,
    },
    {
        key: 'department',
        label: 'Department',
        type: FieldType.SINGLE_SELECT,
        options: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance', 'Operations'],
    },
    {
        key: 'role',
        label: 'Role',
        type: FieldType.TEXT,
    },
    {
        key: 'salary',
        label: 'Salary',
        type: FieldType.AMOUNT,
    },
    {
        key: 'joinDate',
        label: 'Join Date',
        type: FieldType.DATE,
    },
    {
        key: 'isActive',
        label: 'Active Status',
        type: FieldType.BOOLEAN,
    },
    {
        key: 'skills',
        label: 'Skills',
        type: FieldType.MULTI_SELECT,
        options: [
            'React',
            'TypeScript',
            'Node.js',
            'Python',
            'JavaScript',
            'AWS',
            'GraphQL',
            'Docker',
            'Kubernetes',
            'SQL',
            'MongoDB',
            'System Design',
        ],
    },
    {
        key: 'address.city',
        label: 'City',
        type: FieldType.TEXT,
        path: 'address.city',
    },
    {
        key: 'address.state',
        label: 'State',
        type: FieldType.SINGLE_SELECT,
        path: 'address.state',
        options: ['CA', 'NY', 'TX', 'FL', 'WA', 'IL', 'MA', 'CO', 'AZ', 'OR'],
    },
    {
        key: 'projects',
        label: 'Number of Projects',
        type: FieldType.NUMBER,
    },
    {
        key: 'performanceRating',
        label: 'Performance Rating',
        type: FieldType.NUMBER,
    },
];

// Operator labels for display
export const OPERATOR_LABELS = {
    // Text
    [TextOperator.EQUALS]: 'Equals',
    [TextOperator.CONTAINS]: 'Contains',
    [TextOperator.STARTS_WITH]: 'Starts With',
    [TextOperator.ENDS_WITH]: 'Ends With',
    [TextOperator.NOT_CONTAINS]: 'Does Not Contain',
    // Number
    [NumberOperator.EQUALS]: 'Equals',
    [NumberOperator.GT]: 'Greater Than',
    [NumberOperator.LT]: 'Less Than',
    [NumberOperator.GTE]: 'Greater Than or Equal',
    [NumberOperator.LTE]: 'Less Than or Equal',
    // Date
    [DateOperator.BETWEEN]: 'Between',
    // Amount
    [AmountOperator.BETWEEN]: 'Between',
    // Single Select
    [SingleSelectOperator.IS]: 'Is',
    [SingleSelectOperator.IS_NOT]: 'Is Not',
    // Multi Select
    [MultiSelectOperator.IN]: 'In',
    [MultiSelectOperator.NOT_IN]: 'Not In',
    // Boolean
    [BooleanOperator.IS]: 'Is',
};

// Get operators for a specific field type
export const getOperatorsForFieldType = (fieldType: FieldType) => {
    switch (fieldType) {
        case FieldType.TEXT:
            return Object.values(TextOperator);
        case FieldType.NUMBER:
            return Object.values(NumberOperator);
        case FieldType.DATE:
            return Object.values(DateOperator);
        case FieldType.AMOUNT:
            return Object.values(AmountOperator);
        case FieldType.SINGLE_SELECT:
            return Object.values(SingleSelectOperator);
        case FieldType.MULTI_SELECT:
            return Object.values(MultiSelectOperator);
        case FieldType.BOOLEAN:
            return Object.values(BooleanOperator);
        default:
            return [];
    }
};

// Get field definition by key
export const getFieldDefinition = (key: string): FieldDefinition | undefined => {
    return FIELD_CONFIG.find((field) => field.key === key);
};
