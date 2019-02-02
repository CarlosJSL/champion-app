import { Navigation } from 'react-native-navigation';

import {
  SIDE_DRAWER,
  HOME_SCREEN,
  LOGIN_SCREEN,
  TRAINNINGS_SCREEN,
  EXERCISES_SCREEN,
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
      sideMenu: {
        left: {
          component:  { 
            name: SIDE_DRAWER,
          } 
        },
        center: {
          stack: {
            id:"Home",
            children: [
              {
                component: { 
                  id:"ExercisesScreen",
                  name: EXERCISES_SCREEN 
                },
              },
              {
                component: { 
                  id:"TrainingsScreen",
                  name: TRAINNINGS_SCREEN 
                },
              },
              {
                component: { 
                  id:"Home",
                  name: HOME_SCREEN 
                }
              },
            ],
            options: {
              topBar: {
                title: {
                  text: 'Home',
                  color: 'white',
                  alignment: 'center', 
                },
                background: {
                  color: '#292929'
                }
              }
            }
          }
        }
      }
    }
  });
}

export function trainingsScreen() {
  Navigation.push("TrainingsScreen", {
    component: {
      name: TRAINNINGS_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Treinos'
          },
          background: {
            color: '#8431ED'
          }
        }
      }
    }
  })
}

export function exercisesScreen() {
  Navigation.push("ExercisesScreen", {
    component: {
      name: EXERCISES_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Exercicios'
          },
          background: {
            color: '#8431ED'
          }
        }
      }
    }
  })
}