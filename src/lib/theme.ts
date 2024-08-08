import {MD3Theme} from 'react-native-paper';

export const DefaultTheme = {
  dark: false,
  colors: {
    honeydew: '#F1FFF3',
    lightGreen: '#DFF7E2',
    caribbeanGreen: '#00D09E',
    cyprus: '#0E3E3E',
    fenceGreen: '#052224',
    void: '#031314',
    lightBlue: '#6DB6FE',
    vividBlue: '#3299FF',
    oceanBlue: '#0068FF',
    white: '#FFFFFF',
    lightWhite: '#E9F6FE',
    gray: '#4B4544',
    letterAndIcon: '#093030',
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
