import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Plus, X } from 'lucide-react';
import { useFilterContext } from '../../context/FilterContext';
import { FilterConditionComponent } from './FilterCondition';
import { type FilterCondition, FieldType, TextOperator } from '../../types/filter.types';

export const FilterBuilder: React.FC = () => {
    const { conditions, addCondition, removeCondition, updateCondition, clearAll } =
        useFilterContext();

    const handleAddFilter = () => {
        // Add a new filter with default values (Name field, Contains operator)
        const newCondition: FilterCondition = {
            id: `filter-${Date.now()}-${Math.random()}`,
            field: 'name',
            fieldType: FieldType.TEXT as FieldType.TEXT,
            operator: TextOperator.CONTAINS,
            value: '',
        };
        addCondition(newCondition);
    };

    return (
        <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" component="h2">
                    Filter Employees
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                        variant="outlined"
                        startIcon={<Plus size={18} />}
                        onClick={handleAddFilter}
                        size="small"
                    >
                        Add Filter
                    </Button>
                    {conditions.length > 0 && (
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<X size={18} />}
                            onClick={clearAll}
                            size="small"
                        >
                            Clear All
                        </Button>
                    )}
                </Box>
            </Box>

            {conditions.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
                    <Typography variant="body1">
                        No filters applied. Click "Add Filter" to start filtering.
                    </Typography>
                </Box>
            ) : (
                <Box>
                    {conditions.map((condition) => (
                        <FilterConditionComponent
                            key={condition.id}
                            condition={condition}
                            onChange={(updated) => updateCondition(condition.id, updated)}
                            onRemove={() => removeCondition(condition.id)}
                        />
                    ))}
                </Box>
            )}

            {conditions.length > 0 && (
                <Box sx={{ mt: 2, color: 'text.secondary' }}>
                    <Typography variant="caption">
                        {conditions.length} filter{conditions.length > 1 ? 's' : ''} active. All conditions must
                        match (AND logic).
                    </Typography>
                </Box>
            )}
        </Paper>
    );
};
