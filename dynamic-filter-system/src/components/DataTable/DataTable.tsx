import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    Chip,
    TableSortLabel,
} from '@mui/material';
import { type Employee } from '../../types/data.types';
import { formatCurrency, formatDate } from '../../utils/validation';

interface DataTableProps {
    employees: Employee[];
    totalCount: number;
    filteredCount: number;
}

type SortField = keyof Employee | 'address.city';
type SortDirection = 'asc' | 'desc';

export const DataTable: React.FC<DataTableProps> = ({
    employees,
    totalCount,
    filteredCount,
}) => {
    const [sortField, setSortField] = useState<SortField>('id');
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const sortedEmployees = React.useMemo(() => {
        return [...employees].sort((a, b) => {
            let aValue: any;
            let bValue: any;

            if (sortField === 'address.city') {
                aValue = a.address.city;
                bValue = b.address.city;
            } else {
                aValue = a[sortField];
                bValue = b[sortField];
            }

            // Handle different types
            if (typeof aValue === 'string') {
                aValue = aValue.toLowerCase();
                bValue = bValue?.toLowerCase() || '';
            }

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [employees, sortField, sortDirection]);

    return (
        <Paper elevation={2} sx={{ p: 3 }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" component="h2">
                    Employee List
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Showing {filteredCount} of {totalCount} employees
                </Typography>
            </Box>

            {sortedEmployees.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 8, color: 'text.secondary' }}>
                    <Typography variant="h6" gutterBottom>
                        No Results Found
                    </Typography>
                    <Typography variant="body2">
                        No employees match your current filters. Try adjusting your criteria.
                    </Typography>
                </Box>
            ) : (
                <TableContainer sx={{ maxHeight: 600 }}>
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'id'}
                                        direction={sortField === 'id' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('id')}
                                    >
                                        ID
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'name'}
                                        direction={sortField === 'name' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('name')}
                                    >
                                        Name
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'department'}
                                        direction={sortField === 'department' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('department')}
                                    >
                                        Department
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'salary'}
                                        direction={sortField === 'salary' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('salary')}
                                    >
                                        Salary
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'joinDate'}
                                        direction={sortField === 'joinDate' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('joinDate')}
                                    >
                                        Join Date
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'isActive'}
                                        direction={sortField === 'isActive' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('isActive')}
                                    >
                                        Status
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>Skills</TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'address.city'}
                                        direction={sortField === 'address.city' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('address.city')}
                                    >
                                        City
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'projects'}
                                        direction={sortField === 'projects' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('projects')}
                                    >
                                        Projects
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortField === 'performanceRating'}
                                        direction={sortField === 'performanceRating' ? sortDirection : 'asc'}
                                        onClick={() => handleSort('performanceRating')}
                                    >
                                        Rating
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedEmployees.map((employee) => (
                                <TableRow key={employee.id} hover>
                                    <TableCell>{employee.id}</TableCell>
                                    <TableCell>
                                        <Typography variant="body2" fontWeight="medium">
                                            {employee.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="body2" color="text.secondary">
                                            {employee.email}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>{employee.department}</TableCell>
                                    <TableCell>{employee.role}</TableCell>
                                    <TableCell>{formatCurrency(employee.salary)}</TableCell>
                                    <TableCell>{formatDate(employee.joinDate)}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={employee.isActive ? 'Active' : 'Inactive'}
                                            color={employee.isActive ? 'success' : 'default'}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, maxWidth: 200 }}>
                                            {employee.skills.slice(0, 3).map((skill, index) => (
                                                <Chip key={index} label={skill} size="small" variant="outlined" />
                                            ))}
                                            {employee.skills.length > 3 && (
                                                <Chip
                                                    label={`+${employee.skills.length - 3}`}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            )}
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {employee.address.city}, {employee.address.state}
                                    </TableCell>
                                    <TableCell>{employee.projects}</TableCell>
                                    <TableCell>
                                        <Typography
                                            variant="body2"
                                            color={employee.performanceRating >= 4.5 ? 'success.main' : 'text.primary'}
                                            fontWeight="medium"
                                        >
                                            {employee.performanceRating.toFixed(1)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Paper>
    );
};
