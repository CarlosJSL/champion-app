import { Navigation } from 'react-native-navigation';

import {
    HOME_SCREEN,
    LOGIN_SCREEN,
  } from './Screens';

import registerScreens from './registerScreens';

registerScreens();

export function loginScreen() {
    Navigation.setRoot({
        root: {
          component: {
            name: LOGIN_SCREEN
          }
        }
    });
}

export function HomeScreen() {
  Navigation.setRoot({
      root: {
        component: {
          name: HOME_SCREEN,
        },
      },
  });
}