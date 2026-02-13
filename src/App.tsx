import React, { useState } from 'react';
import { Container, Typography, Box, CssBaseline, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FilterProvider, useFilterContext } from './context/FilterContext';
import { FilterBuilder } from './components/FilterBuilder/FilterBuilder';
import { DataTable } from './components/DataTable/DataTable';
import { useFilteredData } from './hooks/useFilteredData';
import { MOCK_EMPLOYEES } from './data/employees';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f7fa',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1a202c',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        }
      }
    }
  }
});

const AppContent: React.FC = () => {
  const [employees] = useState(MOCK_EMPLOYEES);
  const { conditions } = useFilterContext();

  // Apply filters to data locally
  const { filteredEmployees, totalCount, filteredCount } = useFilteredData(employees, conditions);

  return (
    <Box sx={{ mt: 12 }}>
      <Container maxWidth="lg">
        <FilterBuilder />
        <DataTable
          employees={filteredEmployees}
          totalCount={totalCount}
          filteredCount={filteredCount}
        />
      </Container>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0}>
        <Toolbar sx={{ justifyContent: 'center', py: 1 }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h1" fontWeight="bold">
              Dynamic Filter System
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Filter and search through employee data with advanced filtering options
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <FilterProvider>
        <AppContent />
      </FilterProvider>
    </ThemeProvider>
  );
}

export default App;
