/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors';

module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      // colors: {
      //    'azul': {
      //       1: '#dbeafe',
      //       2: '#bfdbfe',
      //       3: '#7dd3fc',
      //       4: '#38bdf8',
      //       5: '#0ea5e9',
      //       6: '#0284c7',
      //       7: '#0369a1',
      //       8: '#075985',
      //       9: '#0c4a6e',
      //       9.5: '#082f49'
      //    },
      //    verde: {
      //       0.5: '#f0fdf4',
      //       1: '#dcfce7',
      //       2: '#bbf7d0',
      //       3: '#86efac',
      //       4: '#4ade80',
      //       5: '#22c55e',
      //       6: '#16a34a',
      //       7: '#15803d',
      //       8: '#166534',
      //       9: '#14532d',
      //       9.5: '#052e16'
      //    }
      // },
      extend: {},
   },
   plugins: [
      createThemes({
         Azul: {
            'myTheme-Body': '#082f49',
            'myTheme-Container': '#dbeafe',
            'myTheme-Button': '#38bdf8',
            'myTheme-ButtonHover': '#0ea5e9',
            'myTheme-ListBoxButton': '#7dd3fc',
            'myTheme-ListBoxOptionActive': '#bfdbfe',
            'myTheme-ListBoxOptionText': '#0c4a6e',
            'myTheme-ListBoxCheckIcon': '#0284c7',
         },
         Verde: {
            'myTheme-Body': '#052e16',
            'myTheme-Container': '#dcfce7',
            'myTheme-Button': '#4ade80',
            'myTheme-ButtonHover': '#22c55e',
            'myTheme-ListBoxButton': '#5eead4',
            'myTheme-ListBoxOptionActive': '#bbf7d0',
            'myTheme-ListBoxOptionText': '#134e4a',
            'myTheme-ListBoxCheckIcon': '#0d9488',
         },
         Vermelho: {
            'myTheme-Body': '#450a0a', //950
            'myTheme-Container': '#fee2e2', //100
            'myTheme-Button': '#f87171', //400
            'myTheme-ButtonHover': '#ef4444', //500
            'myTheme-ListBoxButton': '#fca5a5', //300
            'myTheme-ListBoxOptionActive': '#fecaca', //200
            'myTheme-ListBoxOptionText': '#7f1d1d', //900
            'myTheme-ListBoxCheckIcon': '#dc2626', //600
         },
         Amarelo: {
            'myTheme-Body': '#422006', //950
            'myTheme-Container': '#fef9c3', //100
            'myTheme-Button': '#facc15', //400
            'myTheme-ButtonHover': '#eab308', //500
            'myTheme-ListBoxButton': '#fde047', //300
            'myTheme-ListBoxOptionActive': '#fef08a', //200
            'myTheme-ListBoxOptionText': '#713f12', //900
            'myTheme-ListBoxCheckIcon': '#ca8a04', //600
         }
      })
   ],
}