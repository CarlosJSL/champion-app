import React from 'react';
import { Navigation } from 'react-native-navigation';

import ExercisesScreen from '../screens/Exercises';
import TrainningsScreen from '../screens/Trainnings';
import SideDrawer from '../screens/SideDrawer';
import HomeScreen from '../screens/Home';
import Login from '../screens/Login';

import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  SIDE_DRAWER,
  TRAINNINGS_SCREEN,
  EXERCISES_SCREEN
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
  Navigation.registerComponent(TRAINNINGS_SCREEN, () => WrappedComponent(TrainningsScreen));
  Navigation.registerComponent(EXERCISES_SCREEN, () => WrappedComponent(ExercisesScreen));
  Navigation.registerComponent(SIDE_DRAWER, () => WrappedComponent(SideDrawer));
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(Login));
  console.info('All screens have been registered...');
}