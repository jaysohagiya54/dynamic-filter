import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, Box, Chip } from '@mui/material';

interface MultiSelectInputProps {
    value: string[];
    onChange: (value: string[]) => void;
    options: string[];
    label?: string;
}

export const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
    value,
    onChange,
    options,
    label = 'Value',
}) => {
    return (
        <FormControl fullWidth size="small">
            <InputLabel>{label}</InputLabel>
            <Select
                multiple
                value={value}
                onChange={(e) => onChange(e.target.value as string[])}
                label={label}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((val) => (
                            <Chip key={val} label={val} size="small" />
                        ))}
                    </Box>
                )}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        <Checkbox checked={value.indexOf(option) > -1} />
                        <ListItemText primary={option} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
