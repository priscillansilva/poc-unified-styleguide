import React from 'react';
import {ThemeProvider as MainThemeProvider} from 'styled-components/native';
import theme from '../../src/theme';

export const ThemeProvider = ({children}) => (
  <MainThemeProvider theme={theme}>{children}</MainThemeProvider>
);
