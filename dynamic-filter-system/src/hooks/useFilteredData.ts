import { useMemo } from 'react';
import { type Employee } from '../types/data.types';
import { type FilterCondition } from '../types/filter.types';
import { filterEmployees } from '../utils/filterEngine';

export const useFilteredData = (employees: Employee[], conditions: FilterCondition[]) => {
    const filteredData = useMemo(() => {
        return filterEmployees(employees, conditions);
    }, [employees, conditions]);

    return {
        filteredEmployees: filteredData,
        totalCount: employees.length,
        filteredCount: filteredData.length,
    };
};
