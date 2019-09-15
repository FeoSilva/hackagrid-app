import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Flux } from './screens/SignIn/signin.routes';
import LoggedBottomBarRoutes from './screens/BottomBar/logged_bottom_bar.routes';
import BiometricPromptScreen from './screens/SignIn/BiometricPrompt/BiometricPromptScreen';

console.disableYellowBox = true;

const Routes = (userLogged = false) => {
  let initialRouteName = 'SignIn';
  if (userLogged) {
    initialRouteName = 'Logged';
  }

  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn: SignInScreen,
        Logged: LoggedBottomBarRoutes,
        BiometricPrompt: {
          screen: BiometricPromptScreen,
        },
      },
      {
        initialRouteName,
      },
    ),
  );
};

export default Routes;
