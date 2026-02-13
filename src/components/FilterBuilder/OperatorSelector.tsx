import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FieldType, type Operator } from '../../types/filter.types';
import { getOperatorsForFieldType, OPERATOR_LABELS } from '../../utils/fieldConfig';

interface OperatorSelectorProps {
    fieldType: FieldType;
    value: Operator;
    onChange: (operator: Operator) => void;
}

export const OperatorSelector: React.FC<OperatorSelectorProps> = ({
    fieldType,
    value,
    onChange,
}) => {
    const operators = getOperatorsForFieldType(fieldType);

    return (
        <FormControl fullWidth size="small">
            <InputLabel>Operator</InputLabel>
            <Select value={value} onChange={(e) => onChange(e.target.value as Operator)} label="Operator">
                {operators.map((op) => (
                    <MenuItem key={op} value={op}>
                        {OPERATOR_LABELS[op as keyof typeof OPERATOR_LABELS]}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
