import React from 'react';
import { FormControl, FormControlLabel, Switch, RadioGroup, Radio, Box } from '@mui/material';

interface BooleanInputProps {
    value: boolean;
    onChange: (value: boolean) => void;
    label?: string;
}

export const BooleanInput: React.FC<BooleanInputProps> = ({ value, onChange, label = 'Value' }) => {
    return (
        <FormControl fullWidth size="small">
            <RadioGroup
                row
                value={value.toString()}
                onChange={(e) => onChange(e.target.value === 'true')}
                sx={{ display: 'flex', gap: 2, mt: 1 }}
            >
                <FormControlLabel value="true" control={<Radio />} label="True" />
                <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
        </FormControl>
    );
};
