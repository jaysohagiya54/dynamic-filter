# Dynamic Filter Component System

A reusable, type-safe dynamic filter system built with **React 18**, **TypeScript**, and **Material UI**. This project demonstrates advanced component architecture, state management, and client-side data filtering for complex data tables.

🚀 **[Live Demo](#)** (Deploy instructions below)

![Dynamic Filter System](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![Material UI](https://img.shields.io/badge/MaterialUI-7.3-blue)

## ✨ Features

### Core Functionality
- **7 Filter Types** with appropriate operators:
  - **Text**: Equals, Contains, Starts With, Ends With, Does Not Contain
  - **Number**: Equals, Greater Than, Less Than, Greater Than or Equal, Less Than or Equal
  - **Date**: Between (date range picker)
  - **Amount/Currency**: Between (with $ formatting)
  - **Single Select**: Is, Is Not
  - **Multi-Select**: In, Not In (with checkboxes)
  - **Boolean**: Is (True/False radio buttons)

- **Advanced Filtering**:
  - Real-time client-side filtering
  - Multiple filter conditions (AND logic)
  - Nested object filtering (e.g., `address.city`)
  - Array field filtering (skills IN/NOT IN)
  - Case-insensitive text matching

- **Data Table Features**:
  - Sortable columns
  - Responsive design
  - Empty state handling
  - Record counts (total vs filtered)
  - Optimized performance for 50+ records

### Technical Highlights
- **Type-Safe Architecture**: Discriminated union types for filter conditions
- **Component Modularity**: Reusable, independent components
- **State Management**: React Context API
- **Input Validation**: Built-in validation for all field types
- **Performance**: Memoization with `useMemo` and `useCallback`

## 📦 Tech Stack

- [Vite](https://vitejs.dev/) - Build tool
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Material UI](https://mui.com/) - Component library
- [Lucide React](https://lucide.dev/) - Icons
- [date-fns](https://date-fns.org/) - Date manipulation
- [json-server](https://github.com/typicode/json-server) - Mock API

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dynamic-filter-system

# Install dependencies
npm install
```

### Running the Application

You need to run **one servers** simultaneously:

# Terminal 2: Start the Vite Dev Server (App on port 5173)
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── FilterBuilder/
│   │   ├── FilterBuilder.tsx          # Main filter container
│   │   ├── FilterCondition.tsx        # Individual filter row
│   │   ├── FieldSelector.tsx          # Field dropdown
│   │   ├── OperatorSelector.tsx       # Operator dropdown
│   │   └── inputs/                    # Field-specific inputs
│   │       ├── TextInput.tsx
│   │       ├── NumberInput.tsx
│   │       ├── DateRangeInput.tsx
│   │       ├── AmountRangeInput.tsx
│   │       ├── SingleSelectInput.tsx
│   │       ├── MultiSelectInput.tsx
│   │       └── BooleanInput.tsx
│   └── DataTable/
│       └── DataTable.tsx              # Sortable data table
├── context/
│   └── FilterContext.tsx              # Global filter state
├── hooks/
│   └── useFilteredData.ts             # Data filtering hook
├── types/
│   ├── data.types.ts                  # Employee data interfaces
│   └── filter.types.ts                # Filter type definitions
├── utils/
│   ├── filterEngine.ts                # Core filtering algorithms
│   ├── fieldConfig.ts                 # Field definitions
│   └── validation.ts                  # Input validation
├── App.tsx                            # Main app component
└── main.tsx                           # Entry point
```

## 🎯 Architecture

### Type System
The project uses **discriminated unions** for type-safe filter conditions:

```typescript
type FilterCondition =
  | { fieldType: FieldType.TEXT; operator: TextOperator; value: string }
  | { fieldType: FieldType.NUMBER; operator: NumberOperator; value: number }
  | { fieldType: FieldType.DATE; operator: DateOperator; value: { start: string; end: string } }
  // ... other variants
```

### Component Hierarchy
```
App (FilterProvider)
├── FilterBuilder
│   └── FilterCondition (multiple)
│       ├── FieldSelector
│       ├── OperatorSelector
│       └── DynamicInput (TextInput | NumberInput | DateRangeInput | etc.)
└── DataTable
```

### State Management
- **React Context** (`FilterContext`) manages global filter state
- **useFilteredData** hook applies filters with memoization
- Real-time updates on filter changes

## 🔧 Usage Examples

### Adding a New Filterable Field

1. **Define the field in `fieldConfig.ts`**:
```typescript
{
  key: 'newField',
  label: 'New Field',
  type: FieldType.TEXT,
}
```

2. The system automatically:
   - Shows the field in the FieldSelector
   - Applies appropriate operators
   - Renders the correct input component
   - Filters data based on the field

### Extending with New Operators

Add operators to the appropriate enum in `filter.types.ts`:

```typescript
export enum TextOperator {
  // ... existing operators
  REGEX = 'REGEX',  // New operator
}
```

Then implement the filtering logic in `filterEngine.ts`.

## 📊 Sample Data

The project includes 55 diverse employee records with:
- 6 departments (Engineering, Marketing, Sales, HR, Finance, Operations)
- Salary range: $61,000 - $145,000
- Join dates: 2018-2023
- Performance ratings: 2.0 - 5.0
- 40+ unique skills
- 25+ US cities

## 🧪 Testing

### Manual Testing Checklist

**Text Filters:**
- [x] Name → Contains → "John"
- [x] Email → Starts With → "john"

**Number Filters:**
- [x] Salary → Greater Than → 80000
- [x] Projects → Equals → 5

**Date Filters:**
- [x] Join Date → Between → 2020-01-01 to 2022-12-31

**Amount Filters:**
- [x] Salary → Between → 60000 to 100000

**Select Filters:**
- [x] Department → Is → "Engineering"
- [x] Skills → In → ["React", "TypeScript"]

**Boolean Filters:**
- [x] Active Status → Is → True

**Multiple Filters:**
- [x] Department = "Engineering" AND Salary > 90000

### Build Verification

```bash
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Note: You'll need to deploy the API separately or use a backend service
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

## 🎨 Customization

### Theming
Modify the Material UI theme in `App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    mode: 'light', // or 'dark'
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});
```

### Field Configuration
Edit `fieldConfig.ts` to modify available fields, operators, and options.

## 📈 Performance Optimizations

- ✅ `useMemo` for filtered data computation
- ✅ React.memo for table rows (if needed)
- ✅ Efficient filter algorithms
- ✅ Optimized re-renders with proper key usage

## 🐛 Known Limitations

- Filters use AND logic only (no OR support)
- No regex support (can be added as bonus feature)
- No filter persistence across sessions (can add localStorage)

## 📝 License

MIT

## 👤 Author

Jay Sohagiya
---

