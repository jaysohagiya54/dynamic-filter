import {
    type FilterCondition,
    FieldType,
    TextOperator,
    NumberOperator,
    SingleSelectOperator,
    MultiSelectOperator,
} from '../types/filter.types';
import { type Employee } from '../types/data.types';
import { parseISO, isWithinInterval } from 'date-fns';

// Helper to get nested property value
const getNestedValue = (obj: any, path: string): any => {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
};

// Text filter implementation
const applyTextFilter = (value: any, filterValue: string, operator: TextOperator): boolean => {
    if (value === null || value === undefined) return false;

    const strValue = String(value).toLowerCase();
    const filterStr = filterValue.toLowerCase();

    switch (operator) {
        case TextOperator.EQUALS:
            return strValue === filterStr;
        case TextOperator.CONTAINS:
            return strValue.includes(filterStr);
        case TextOperator.STARTS_WITH:
            return strValue.startsWith(filterStr);
        case TextOperator.ENDS_WITH:
            return strValue.endsWith(filterStr);
        case TextOperator.NOT_CONTAINS:
            return !strValue.includes(filterStr);
        default:
            return false;
    }
};

// Number filter implementation
const applyNumberFilter = (value: any, filterValue: number, operator: NumberOperator): boolean => {
    if (value === null || value === undefined || isNaN(value)) return false;

    const numValue = Number(value);

    switch (operator) {
        case NumberOperator.EQUALS:
            return numValue === filterValue;
        case NumberOperator.GT:
            return numValue > filterValue;
        case NumberOperator.LT:
            return numValue < filterValue;
        case NumberOperator.GTE:
            return numValue >= filterValue;
        case NumberOperator.LTE:
            return numValue <= filterValue;
        default:
            return false;
    }
};

// Date filter implementation
const applyDateFilter = (value: any, filterValue: { start: string; end: string }): boolean => {
    if (!value) return false;

    try {
        const dateValue = typeof value === 'string' ? parseISO(value) : value;
        const startDate = parseISO(filterValue.start);
        const endDate = parseISO(filterValue.end);

        return isWithinInterval(dateValue, { start: startDate, end: endDate });
    } catch (error) {
        return false;
    }
};

// Amount filter implementation (similar to number but for range)
const applyAmountFilter = (value: any, filterValue: { min: number; max: number }): boolean => {
    if (value === null || value === undefined || isNaN(value)) return false;

    const numValue = Number(value);
    return numValue >= filterValue.min && numValue <= filterValue.max;
};

// Single select filter implementation
const applySingleSelectFilter = (
    value: any,
    filterValue: string,
    operator: SingleSelectOperator
): boolean => {
    if (value === null || value === undefined) return false;

    switch (operator) {
        case SingleSelectOperator.IS:
            return String(value) === filterValue;
        case SingleSelectOperator.IS_NOT:
            return String(value) !== filterValue;
        default:
            return false;
    }
};

// Multi-select filter implementation (for array fields)
const applyMultiSelectFilter = (
    value: any,
    filterValue: string[],
    operator: MultiSelectOperator
): boolean => {
    if (!Array.isArray(value)) return false;
    if (filterValue.length === 0) return true;

    switch (operator) {
        case MultiSelectOperator.IN:
            // Check if any of the filter values exist in the array
            return filterValue.some((fv) => value.includes(fv));
        case MultiSelectOperator.NOT_IN:
            // Check if none of the filter values exist in the array
            return !filterValue.some((fv) => value.includes(fv));
        default:
            return false;
    }
};

// Boolean filter implementation
const applyBooleanFilter = (value: any, filterValue: boolean): boolean => {
    return Boolean(value) === filterValue;
};

// Main filter application function
const applyFilter = (employee: Employee, condition: FilterCondition): boolean => {
    // Get the value from the employee object (handle nested paths)
    const fieldValue = getNestedValue(employee, condition.field);

    // Apply the appropriate filter based on field type
    switch (condition.fieldType) {
        case FieldType.TEXT:
            return applyTextFilter(fieldValue, condition.value, condition.operator);
        case FieldType.NUMBER:
            return applyNumberFilter(fieldValue, condition.value, condition.operator);
        case FieldType.DATE:
            return applyDateFilter(fieldValue, condition.value);
        case FieldType.AMOUNT:
            return applyAmountFilter(fieldValue, condition.value);
        case FieldType.SINGLE_SELECT:
            return applySingleSelectFilter(fieldValue, condition.value, condition.operator);
        case FieldType.MULTI_SELECT:
            return applyMultiSelectFilter(fieldValue, condition.value, condition.operator);
        case FieldType.BOOLEAN:
            return applyBooleanFilter(fieldValue, condition.value);
        default:
            return false;
    }
};

// Filter employees with multiple conditions (AND logic)
export const filterEmployees = (
    employees: Employee[],
    conditions: FilterCondition[]
): Employee[] => {
    if (conditions.length === 0) {
        return employees;
    }

    return employees.filter((employee) => {
        // All conditions must be satisfied (AND logic)
        return conditions.every((condition) => applyFilter(employee, condition));
    });
};
