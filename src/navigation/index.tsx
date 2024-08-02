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

import {BottomStackScreen} from './BottomStackScreen';
import {DoctorScreenStack} from './DoctorStackScreen';
import {NotificationStack} from './NotificationStackScreen';
import {SpecialtiesStack} from './SpecialtiesStack';

const AppRootStack = createNativeStackNavigator<AppRootStackParams>();

export const AppNavigator = () => {
  const locale = useSelector(localeSelector);
  const auth = useSelector(authSelector);

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          <AppRootStack.Navigator>
            {auth ? (
              <>
                <AppRootStack.Screen
                  name={Paths.BottomStack}
                  component={BottomStackScreen}
                  options={{headerShown: false}}
                />

                <AppRootStack.Screen
                  name={Paths.SpecialtiesStack}
                  component={SpecialtiesStack}
                  options={{headerShown: false}}
                />

                <AppRootStack.Screen
                  name={Paths.DoctorStack}
                  component={DoctorScreenStack}
                  options={{headerShown: false}}
                />

                <AppRootStack.Screen
                  name={Paths.NotificationStack}
                  component={NotificationStack}
                  options={{headerShown: false}}
                />
              </>
            ) : (
              <AppRootStack.Screen
                name={Paths.Authentication}
                component={Authentication}
                options={{headerShown: false}}
              />
            )}
          </AppRootStack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};
