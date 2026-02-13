import React from 'react';
import { TextField } from '@mui/material';

interface TextInputProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, label = 'Value' }) => {
    return (
        <TextField
            fullWidth
            size="small"
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter text..."
        />
    );
};
