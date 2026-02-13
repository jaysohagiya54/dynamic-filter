import React, { useState } from 'react';
import { Box, IconButton, Paper } from '@mui/material';
import { Trash2 } from 'lucide-react';
import {
    type FilterCondition,
    FieldType,
    TextOperator,
    NumberOperator,
    DateOperator,
    AmountOperator,
    SingleSelectOperator,
    MultiSelectOperator,
    BooleanOperator,
} from '../../types/filter.types';
import { getFieldDefinition, getOperatorsForFieldType } from '../../utils/fieldConfig';
import { FieldSelector } from './FieldSelector';
import { OperatorSelector } from './OperatorSelector';
import { TextInput } from './inputs/TextInput';
import { NumberInput } from './inputs/NumberInput';
import { DateRangeInput } from './inputs/DateRangeInput';
import { AmountRangeInput } from './inputs/AmountRangeInput';
import { SingleSelectInput } from './inputs/SingleSelectInput';
import { MultiSelectInput } from './inputs/MultiSelectInput';
import { BooleanInput } from './inputs/BooleanInput';

interface FilterConditionProps {
    condition: FilterCondition;
    onChange: (condition: FilterCondition) => void;
    onRemove: () => void;
}

export const FilterConditionComponent: React.FC<FilterConditionProps> = ({
    condition,
    onChange,
    onRemove,
}) => {
    const [fieldKey, setFieldKey] = useState(condition.field);
    const fieldDef = getFieldDefinition(fieldKey);

    // Handle field change - reset operator and value
    const handleFieldChange = (newFieldKey: string) => {
        const newFieldDef = getFieldDefinition(newFieldKey);
        if (!newFieldDef) return;

        setFieldKey(newFieldKey);

        // Get first operator for the new field type
        const operators = getOperatorsForFieldType(newFieldDef.type);
        const defaultOperator = operators[0];

        // Create new condition with default values based on field type
        let newCondition: FilterCondition;

        switch (newFieldDef.type) {
            case FieldType.TEXT:
                newCondition = {
                    id: condition.id,
                    field: newFieldKey,
                    fieldType: FieldType.TEXT,
                    operator: defaultOperator as TextOperator,
                    value: '',
                };
                break;
            case FieldType.NUMBER:
                newCondition = {
                    id: condition.id,
                    field: newFieldKey,
                    fieldType: FieldType.NUMBER,
                    operator: defaultOperator as NumberOperator,
                    value: 0,
                };
                break;
            case FieldType.DATE:
                newCondition = {
                    id: condition.id,
                    field: newFieldKey,
                    fieldType: FieldType.DATE,
                    operator: defaultOperator as DateOperator,
                    value: { start: '', end: '' },
                };
                break;
            case FieldType.AMOUNT:
                newCondition = {
                    id: condition.id,
                    field: newFieldKey,
                    fieldType: FieldType.AMOUNT,
                    operator: defaultOperator as AmountOperator,
                    value: { min: 0, max: 0 },
                };
                break;
            case FieldType.SINGLE_SELECT:
                newCondition = {
                    id: condition.id,
                    field: newFieldKey,
                    fieldType: FieldType.SINGLE_SELECT,
                    operator: defaultOperator as SingleSelectOperator,
                    value: newFieldDef.options?.[0] || '',
                };
                break;
            case FieldType.MULTI_SELECT:
                newCondition = {
                    id: condition.id,
                    field: newFieldKey,
                    fieldType: FieldType.MULTI_SELECT,
                    operator: defaultOperator as MultiSelectOperator,
                    value: [],
                };
                break;
            case FieldType.BOOLEAN:
                newCondition = {
                    id: condition.id,
                    field: newFieldKey,
                    fieldType: FieldType.BOOLEAN,
                    operator: defaultOperator as BooleanOperator,
                    value: true,
                };
                break;
            default:
                return;
        }

        onChange(newCondition);
    };

    // Render appropriate input based on field type
    const renderInput = () => {
        if (!fieldDef) return null;

        switch (condition.fieldType) {
            case FieldType.TEXT:
                return (
                    <TextInput
                        value={condition.value}
                        onChange={(val) => onChange({ ...condition, value: val })}
                    />
                );
            case FieldType.NUMBER:
                return (
                    <NumberInput
                        value={condition.value}
                        onChange={(val) => onChange({ ...condition, value: val })}
                    />
                );
            case FieldType.DATE:
                return (
                    <DateRangeInput
                        value={condition.value}
                        onChange={(val) => onChange({ ...condition, value: val })}
                    />
                );
            case FieldType.AMOUNT:
                return (
                    <AmountRangeInput
                        value={condition.value}
                        onChange={(val) => onChange({ ...condition, value: val })}
                    />
                );
            case FieldType.SINGLE_SELECT:
                return (
                    <SingleSelectInput
                        value={condition.value}
                        onChange={(val) => onChange({ ...condition, value: val })}
                        options={fieldDef.options || []}
                    />
                );
            case FieldType.MULTI_SELECT:
                return (
                    <MultiSelectInput
                        value={condition.value}
                        onChange={(val) => onChange({ ...condition, value: val })}
                        options={fieldDef.options || []}
                    />
                );
            case FieldType.BOOLEAN:
                return (
                    <BooleanInput
                        value={condition.value}
                        onChange={(val) => onChange({ ...condition, value: val })}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                {/* Field Selector */}
                <Box sx={{ flex: 1 }}>
                    <FieldSelector value={fieldKey} onChange={handleFieldChange} />
                </Box>

                {/* Operator Selector */}
                <Box sx={{ flex: 1 }}>
                    <OperatorSelector
                        fieldType={condition.fieldType}
                        value={condition.operator}
                        onChange={(op) => onChange({ ...condition, operator: op } as FilterCondition)}
                    />
                </Box>

                {/* Value Input */}
                <Box sx={{ flex: 2 }}>{renderInput()}</Box>

                {/* Remove Button */}
                <IconButton onClick={onRemove} color="error" size="small">
                    <Trash2 size={20} />
                </IconButton>
            </Box>
        </Paper>
    );
};
