import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react' // Add this import
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react, // You MUST define the plugin here
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // 1. Load the recommended rules for hooks
      ...reactHooks.configs.recommended.rules,
      
      // 2. Strict unused variables (removed the IgnorePattern)
      'no-unused-vars': 'error', 
      
      // 3. Tell ESLint that variables used in JSX are actually "used"
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
])