/* eslint-disable react/no-unstable-nested-components */
import {Paths} from '@constant/index';
import {AppRootStackParams} from '@lib/types';
import {messages} from '@locale/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {localeSelector} from '@redux/reducer/locale';

import {CustomDrawerContent} from '@components/index';
import React from 'react';
import {IntlProvider} from 'react-intl';
import {PaperProvider} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {Authentication} from './Authentication';
import {BottomStackScreen} from './BottomStackScreen';

import {DefaultTheme} from '@lib/theme';
import {authSelector} from '@redux/reducer/auth';

const AppRootStack = createNativeStackNavigator<AppRootStackParams>();
const DrawerStack = createDrawerNavigator();

export const AppNavigator = () => {
  const locale = useSelector(localeSelector);
  // const auth = useSelector(authSelector);
  const auth = 'abc';

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale as keyof typeof messages]}>
      <PaperProvider theme={DefaultTheme}>
        <NavigationContainer>
          {auth ? (
            <DrawerStack.Navigator
              useLegacyImplementation={false}
              drawerContent={props => <CustomDrawerContent {...props} />}
              screenOptions={{
                headerShown: false,
              }}>
              <DrawerStack.Screen
                name={Paths.BottomStack}
                component={BottomStackScreen}
              />
            </DrawerStack.Navigator>
          ) : (
            <AppRootStack.Navigator>
              <AppRootStack.Screen
                name={Paths.Authentication}
                component={Authentication}
                options={{headerShown: false}}
              />
            </AppRootStack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </IntlProvider>
  );
};
