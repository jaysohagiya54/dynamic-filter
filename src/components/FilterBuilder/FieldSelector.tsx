import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FIELD_CONFIG } from '../../utils/fieldConfig';

interface FieldSelectorProps {
    value: string;
    onChange: (fieldKey: string) => void;
}

export const FieldSelector: React.FC<FieldSelectorProps> = ({ value, onChange }) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>Field</InputLabel>
            <Select value={value} onChange={(e) => onChange(e.target.value)} label="Field">
                {FIELD_CONFIG.map((field) => (
                    <MenuItem key={field.key} value={field.key}>
                        {field.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
