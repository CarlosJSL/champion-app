import React from 'react';
import { Navigation } from 'react-native-navigation';

import HomeScreen from '../screens/Home';
import Login from '../screens/Login';

import {
  HOME_SCREEN,
  LOGIN_SCREEN,
} from './Screens';

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
        <Component
          {...props}
        />
    );

    return <EnhancedComponent />;
  };
}

export default function () {
  Navigation.registerComponent(HOME_SCREEN, () => WrappedComponent(HomeScreen));
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(Login));
  console.info('All screens have been registered...');
}