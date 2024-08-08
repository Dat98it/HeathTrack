import {DefaultTheme} from '@lib/theme';
import {messages} from '@locale/index';
import {localeSelector} from '@redux/reducer/locale';
import CalendarScreen from '@screens/Calender';
import React from 'react';
import {IntlProvider} from 'react-intl';
import {PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';

export const AppNavigator = () => {
  const locale = useSelector(localeSelector);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}>
      <PaperProvider theme={DefaultTheme}>
        <CalendarScreen />
      </PaperProvider>
    </IntlProvider>
  );
};
