import React from 'react';
import { TextField } from '@mui/material';
import { validateNumberInput } from '../../../utils/validation';

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    label?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, label = 'Value' }) => {
    const [error, setError] = React.useState<string | undefined>();

    const handleChange = (inputValue: string) => {
        const validation = validateNumberInput(inputValue);

        if (!validation.isValid) {
            setError(validation.message);
            return;
        }

        setError(undefined);
        onChange(Number(inputValue));
    };

    return (
        <TextField
            fullWidth
            size="small"
            type="number"
            label={label}
            value={value || ''}
            onChange={(e) => handleChange(e.target.value)}
            error={!!error}
            helperText={error}
            placeholder="Enter number..."
        />
    );
};
