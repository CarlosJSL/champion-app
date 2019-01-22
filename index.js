
import { Navigation } from 'react-native-navigation';
import { loginScreen } from './navigation/Navigation';

Navigation.events().registerAppLaunchedListener(() => loginScreen());