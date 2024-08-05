import {MD3Theme} from 'react-native-paper';

export const DefaultTheme = {
  dark: false,
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    black2: '#252525',
    black3: '#333',
    primary: '#0BAB7C',
    lighBlue: '#E9F6FE',
    gray: '#B5B5B5',
    transparent: 'rgba(0,0,0,0.5)',
    placeholder: '#666',
    gradient: '#13CAD6',
    startGradient: '#33E4DB',
    endGradient: '#00BBD3',
    red: 'red',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(247, 243, 249)', // palette.primary40, alpha 0.05
      level2: 'rgb(243, 237, 246)', // palette.primary40, alpha 0.08
      level3: 'rgb(238, 232, 244)', // palette.primary40, alpha 0.11
      level4: 'rgb(236, 230, 243)', // palette.primary40, alpha 0.12
      level5: 'rgb(233, 227, 241)', // palette.primary40, alpha 0.14
    },
  },
};

export type AppTheme = MD3Theme & typeof DefaultTheme;
