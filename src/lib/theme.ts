import {MD3Theme} from 'react-native-paper';

export const DefaultTheme = {
  dark: false,
  colors: {
    primary: '#0BAB7C',
  },
};

export type AppTheme = MD3Theme & typeof DefaultTheme;
