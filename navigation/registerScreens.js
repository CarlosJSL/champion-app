import React from 'react';
import { Navigation } from 'react-native-navigation';

import ChatScreen from '../screens/Chat';
import ExercisesScreen from '../screens/Exercises';
import TrainningsScreen from '../screens/Trainnings';
import SideDrawer from '../screens/SideDrawer';
import HomeScreen from '../screens/Home';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';

import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  SIDE_DRAWER,
  TRAINNINGS_SCREEN,
  EXERCISES_SCREEN,
  SIGNUP_SCREEN,
  CHAT_SCREEN,
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
  Navigation.registerComponent(SIGNUP_SCREEN, () => WrappedComponent(SignUp));
  Navigation.registerComponent(CHAT_SCREEN, () => WrappedComponent(ChatScreen));
  Navigation.registerComponent(TRAINNINGS_SCREEN, () => WrappedComponent(TrainningsScreen));
  Navigation.registerComponent(EXERCISES_SCREEN, () => WrappedComponent(ExercisesScreen));
  Navigation.registerComponent(SIDE_DRAWER, () => WrappedComponent(SideDrawer));
  Navigation.registerComponent(LOGIN_SCREEN, () => WrappedComponent(Login));
  console.info('All screens have been registered...');
}