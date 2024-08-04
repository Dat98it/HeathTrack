import {Paths} from '@constant/index';
import {AppRootStackParams} from '@lib/types';
import {messages} from '@locale/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {localeSelector} from '@redux/reducer/locale';

import React from 'react';
import {IntlProvider} from 'react-intl';
import {PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Authentication} from './Authentication';

import {DefaultTheme} from '@lib/theme';
import {authSelector} from '@redux/reducer/auth';

import {HealthTrackStackScreen} from './HealthTrack';

const RootStack = createNativeStackNavigator<AppRootStackParams>();

export const AppNavigator = () => {
  const locale = useSelector(localeSelector);
  const auth = useSelector(authSelector);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          <RootStack.Navigator>
            {auth ? (
              <>
                <RootStack.Screen
                  name={Paths.HealthTrack}
                  component={HealthTrackStackScreen}
                  options={{headerShown: false}}
                />
              </>
            ) : (
              <RootStack.Screen
                name={Paths.Authentication}
                component={Authentication}
                options={{headerShown: false}}
              />
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};
