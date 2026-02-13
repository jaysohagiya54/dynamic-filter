import React, { createContext, useContext, useState, type ReactNode } from 'react';
import { type FilterCondition } from '../types/filter.types';

interface FilterContextType {
    conditions: FilterCondition[];
    addCondition: (condition: FilterCondition) => void;
    removeCondition: (id: string) => void;
    updateCondition: (id: string, condition: FilterCondition) => void;
    clearAll: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [conditions, setConditions] = useState<FilterCondition[]>([]);

    const addCondition = (condition: FilterCondition) => {
        setConditions([...conditions, condition]);
    };

    const removeCondition = (id: string) => {
        setConditions(conditions.filter((c) => c.id !== id));
    };

    const updateCondition = (id: string, condition: FilterCondition) => {
        setConditions(conditions.map((c) => (c.id === id ? condition : c)));
    };

    const clearAll = () => {
        setConditions([]);
    };

    return (
        <FilterContext.Provider
            value={{
                conditions,
                addCondition,
                removeCondition,
                updateCondition,
                clearAll,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilterContext must be used within FilterProvider');
    }
    return context;
};
