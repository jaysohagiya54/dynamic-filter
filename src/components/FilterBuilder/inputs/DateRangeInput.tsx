import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { Calendar } from 'lucide-react';
import { validateDateRange } from '../../../utils/validation';

interface DateRangeInputProps {
    value: { start: string; end: string };
    onChange: (value: { start: string; end: string }) => void;
}

export const DateRangeInput: React.FC<DateRangeInputProps> = ({ value, onChange }) => {
    const [error, setError] = useState<string | undefined>();

    const handleStartChange = (start: string) => {
        const validation = validateDateRange(start, value.end);
        setError(validation.isValid ? undefined : validation.message);
        onChange({ ...value, start });
    };

    const handleEndChange = (end: string) => {
        const validation = validateDateRange(value.start, end);
        setError(validation.isValid ? undefined : validation.message);
        onChange({ ...value, end });
    };

    return (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
            <TextField
                size="small"
                type="date"
                label="Start Date"
                value={value.start}
                onChange={(e) => handleStartChange(e.target.value)}
                InputLabelProps={{ shrink: true }}
                error={!!error}
                sx={{ flex: 1 }}
            />
            <TextField
                size="small"
                type="date"
                label="End Date"
                value={value.end}
                onChange={(e) => handleEndChange(e.target.value)}
                InputLabelProps={{ shrink: true }}
                error={!!error}
                helperText={error}
                sx={{ flex: 1 }}
            />
        </Box>
    );
};
