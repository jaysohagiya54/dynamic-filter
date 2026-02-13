// Validation utilities for filter inputs

export const validateNumberInput = (value: string): { isValid: boolean; message?: string } => {
    if (value === '') {
        return { isValid: false, message: 'Value is required' };
    }

    const num = Number(value);
    if (isNaN(num)) {
        return { isValid: false, message: 'Must be a valid number' };
    }

    return { isValid: true };
};

export const validateDateRange = (
    start: string,
    end: string
): { isValid: boolean; message?: string } => {
    if (!start || !end) {
        return { isValid: false, message: 'Both start and end dates are required' };
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        return { isValid: false, message: 'Invalid date format' };
    }

    if (startDate > endDate) {
        return { isValid: false, message: 'Start date must be before end date' };
    }

    return { isValid: true };
};

export const validateAmountRange = (
    min: number,
    max: number
): { isValid: boolean; message?: string } => {
    if (isNaN(min) || isNaN(max)) {
        return { isValid: false, message: 'Invalid amount values' };
    }

    if (min > max) {
        return { isValid: false, message: 'Minimum must be less than or equal to maximum' };
    }

    if (min < 0 || max < 0) {
        return { isValid: false, message: 'Amount cannot be negative' };
    }

    return { isValid: true };
};

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

export const formatDate = (dateString: string): string => {
    try {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }).format(date);
    } catch (error) {
        return dateString;
    }
};
