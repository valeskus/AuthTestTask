import React from 'react';
import { Platform, StatusBar, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegisterForm, RegisterCode } from './screens/RegistrationScreens';
import { Login } from './screens/Login';
import { Home } from './screens/Home';
import { Provider } from 'react-redux';
import { store } from './stores/rootStore';


if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};

const Stack = createStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <NavigationContainer >
        <Stack.Navigator screenOptions={{
          cardStyle: {
            backgroundColor: 'white',
            paddingHorizontal: 15
          }
        }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterForm"
            component={RegisterForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterCode"
            component={RegisterCode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}