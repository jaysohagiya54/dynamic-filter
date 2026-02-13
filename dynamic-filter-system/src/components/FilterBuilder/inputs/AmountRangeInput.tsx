import React, { useState } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import { validateAmountRange } from '../../../utils/validation';

interface AmountRangeInputProps {
    value: { min: number; max: number };
    onChange: (value: { min: number; max: number }) => void;
}

export const AmountRangeInput: React.FC<AmountRangeInputProps> = ({ value, onChange }) => {
    const [error, setError] = useState<string | undefined>();

    const handleMinChange = (minStr: string) => {
        const min = Number(minStr) || 0;
        const validation = validateAmountRange(min, value.max);
        setError(validation.isValid ? undefined : validation.message);
        onChange({ ...value, min });
    };

    const handleMaxChange = (maxStr: string) => {
        const max = Number(maxStr) || 0;
        const validation = validateAmountRange(value.min, max);
        setError(validation.isValid ? undefined : validation.message);
        onChange({ ...value, max });
    };

    return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
            <TextField
                size="small"
                type="number"
                label="Minimum"
                value={value.min || ''}
                onChange={(e) => handleMinChange(e.target.value)}
                error={!!error}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                sx={{ flex: 1 }}
            />
            <TextField
                size="small"
                type="number"
                label="Maximum"
                value={value.max || ''}
                onChange={(e) => handleMaxChange(e.target.value)}
                error={!!error}
                helperText={error}
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                sx={{ flex: 1 }}
            />
        </Box>
    );
};
