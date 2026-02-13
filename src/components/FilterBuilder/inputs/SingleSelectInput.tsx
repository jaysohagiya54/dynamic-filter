import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface SingleSelectInputProps {
    value: string;
    onChange: (value: string) => void;
    options: string[];
    label?: string;
}

export const SingleSelectInput: React.FC<SingleSelectInputProps> = ({
    value,
    onChange,
    options,
    label = 'Value',
}) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={(e) => onChange(e.target.value)} label={label}>
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
